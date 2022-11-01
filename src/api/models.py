from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=True, nullable=False)
    last_name = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    birth_date = db.Column(db.Date(), unique=True, nullable=False)
    phone = db.Column(db.String(120), unique=True, nullable=False)
    rol = db.Column(db.String(20), unique=True, nullable=False)
    created_at = db.Column(db.Date(), unique=True, nullable=False)
    updated_at = db.Column(db.Date(), unique=True, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)

    events = db.relationship('Event', backref='user', lazy=True)
    comments = db.relationship('Comment', backref='user', lazy=True)
    ratingss = db.relationship('Rating', backref='user', lazy=True)


    def __repr__(self):
        return f'<User {self.email}>'
    
    @classmethod
    def create(cls, name):
        pass

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "last_name": self.last_name,
            "birth_date": self.birth_date,
            "phone": self.phone,
            "rol": self.rol,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
            "is_active": self.is_active
        }

class Event(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), unique=True, nullable=False)
    address = db.Column(db.String(120), unique=True, nullable=False)
    price = db.Column(db.String(12), unique=True, nullable=False)
    description = db.Column(db.String(180), unique=True, nullable=False)
    category = db.Column(db.String(120), unique=True, nullable=False)
    start_day = db.Column(db.Date(), unique=True, nullable=False)
    end_day = db.Column(db.Date(), unique=True, nullable=False)
    geolocation = db.Column(db.String(120), unique=True, nullable=False)
    img_url = db.Column(db.String(120), unique=True, nullable=False)
    created_at = db.Column(db.Date(), unique=True, nullable=False)
    updated_at = db.Column(db.Date(), unique=True, nullable=False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    comments = db.relationship('Comment', backref='event', lazy=True)
    ratings = db.relationship('Rating', backref='event', lazy=True)

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