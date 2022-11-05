import bcrypt
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.sql import func
from werkzeug.security import generate_password_hash, check_password_hash

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    last_name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    hashed_password = db.Column(db.String(480), nullable=False)
    salt= db.Column(db.String(250), nullable=False)
    birth_date = db.Column(db.String(100), nullable=False)
    phone = db.Column(db.String(120), nullable=False)
    rol = db.Column(db.String(20), nullable=False)
    url_image = db.Column(db.String(250))
    created_at = db.Column(db.DateTime(timezone=True),  default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),  onupdate=func.now())
    is_active = db.Column(db.Boolean(), nullable=False)

    events = db.relationship('Event', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    ratings = db.relationship('Rating', backref='user', lazy=True)
    favoritos = db.relationship('Favorite', backref='user', lazy=True)
    asistencia = db.relationship('Assist', backref='user', lazy=True)


    def __repr__(self):
        return f'<User {self.email}>'
    
    @classmethod
    def create(cls, body):
        try:
            user_is_valid = cls.user_exist(email=body.get("email"))
            if isinstance(user_is_valid, cls):
                raise Exception({
                    "message": "Invalid user",
                    "status": 400
                })
            if(user_is_valid) != False:
                raise Exception({
                    "message": "Internal application error",
                    "status": 500
                })
            salt_bytes = bcrypt.gensalt()
            salt = salt_bytes.decode()
            hashed_password = generate_password_hash(f'{body["password"]}{salt}')
            new_user = cls(name=body["name"], last_name=body["last_name"], birth_date=body["birth_date"], phone=body["phone"], rol=body["rol"], email=body["email"], hashed_password=hashed_password, salt=salt, is_active=True)
            print('     ')
            print('     ')
            print(new_user)
            print('     ')
            print('     ')
            if not isinstance(new_user, cls):
                raise Exception({
                    "message": "Instance error",
                    "status": 500
                })
            saved = new_user.save_and_commit()
            if not saved:
                raise Exception({
                    "message": "Database error",
                    "status": 500
                })
            return new_user
        except Exception as error:
            return error.args[0]

    @classmethod
    def user_exist(cls, **kwargs):
        try:
            user_exist = cls.query.filter_by(email=kwargs["email"]).one_or_none()
            if user_exist:
                user = cls(id=user_exist.id ,email=user_exist.email, hashed_password=user_exist.hashed_password, salt=user_exist.salt, created_at=user_exist.created_at, updated_at=user_exist.updated_at)
                return user
            return False
        except Exception as error:
            return error.args[0]
            
    @classmethod
    def verify_credentials(cls, **kwargs):
        try:
            user = cls.user_exist(email=kwargs["email"])
            if not isinstance(user, cls):
                raise Exception({
                    "message": "Invalid credentials",
                    "status": 400
                })
            password_is_valid = check_password_hash(user.hashed_password, f'{kwargs["password"]}{user.salt}')
            if not password_is_valid:
                raise Exception({
                    "message": "Invalid credentials",
                    "status": 400
                })
            return user
        except Exception as error:
            return error.args[0]

    def save_and_commit(self):
        """
            Salva la instancia creada, en la base de datos. Si sucede algún error, 
            se retorna False y se revierten los cambios de la sesión
        """
        try:
            db.session.add(self)  #Guardamos la instancia en la sessión
            db.session.commit() #Creamos el registro en la db 
            return True
        except Exception as error:
            print(error)
            db.session.rollback() #Retornamos a la session mas reciente
            return False

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "birth_date": self.birth_date,
            "phone": self.phone,
            "rol": self.rol,
            "url_image": self.url_image,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "is_active": self.is_active
        }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    address = db.Column(db.String(120), nullable=False)
    price = db.Column(db.String(12), nullable=False)
    description = db.Column(db.String(180), nullable=False)
    category = db.Column(db.String(120), nullable=False)
    start_day = db.Column(db.Date(), nullable=False)
    end_day = db.Column(db.Date())
    geolocation = db.Column(db.String(120), nullable=False)
    img_url = db.Column(db.String(120), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),  default=func.now())
    updated_at = db.Column(db.DateTime(timezone=True),  onupdate=func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    comments = db.relationship('Comment', backref='event', lazy=True)
    ratings = db.relationship('Rating', backref='event', lazy=True)
    favorites = db.relationship('Favorite', backref='event', lazy=True, uselist=False)
    asistencia = db.relationship('Assist', backref='event', lazy=True, uselist=False)

    @classmethod
    def create(cls, title, address, price, description, category, start_day, end_day, geolocation, img_url):
        return cls(
            title=title, 
            address=address,
            price=price,
            description=description,
            category=category,
            start_day=start_day,
            end_day=end_day,
            geolocation=geolocation,
            img_url=img_url
            )

    def serialize(self):
        return {
            "id": self.id,
            "title": self.title,
            "address": self.address,
            "price": self.price,
            "description": self.description,
            "category": self.category,
            "start_day": self.start_day,
            "end_day": self.end_day,
            "geolocation": self.geolocation,
            "img_url": self.img_url,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.Date(), unique=True, nullable=False)
    updated_at = db.Column(db.Date(), unique=True, nullable=False)

    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    @classmethod
    def create(cls, content):
        return cls(content=content)

    def serialize(self):
        return {
            "id": self.id,
            "content": self.content,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }


class Rating(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    rate = db.Column(db.String(3), unique=True, nullable=False)
    created_at = db.Column(db.Date(), unique=True, nullable=False)
    updated_at = db.Column(db.Date(), unique=True, nullable=False)

    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    @classmethod
    def create(cls, rate):
        return cls(rate=rate)

    def serialize(self):
        return {
            "id": self.id,
            "rate": self.rate,
            "created_at": self.created_at,
            "updated_at": self.updated_at
        }

class Favorite(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.Date(), unique=True, nullable=False)
    updated_at = db.Column(db.Date(), unique=True, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)

class Assist(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    created_at = db.Column(db.Date(), unique=True, nullable=False)
    updated_at = db.Column(db.Date(), unique=True, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    event_id = db.Column(db.Integer, db.ForeignKey('event.id'), nullable=False)