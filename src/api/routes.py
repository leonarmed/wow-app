"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Event, Comment, Rating
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)

def save(new_object):
    try:
        db.session.add(new_object)
        db.session.commit()
        return True
    except:
        db.session.rollback()
        return False

def delete(object):
    try:
        db.session.delete(object)
        db.session.commit()
        return True
    except:
        db.session.rollback()
        return False

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

@api.route('/events', methods = ['GET'])
def get_events():
    try:
        eventos = Event.query.all()
        if eventos:
            eventos_dict = list(map(lambda evento: evento.serialize(), eventos))
            return jsonify(eventos_dict),200
        return jsonify({
            "message": "No se encontro la informacion"
        }),404

    except:
        return({
            "message": "Ha ocurrido un error"
        }),500

@api.route('/event/<int:event_id>', methods = ['GET'])
def get_event_byid(event_id):
    try:
        evento = Event.query.get(event_id)
        if evento:
            return jsonify(evento.serialize()),200
        return jsonify({
            "message": "No se encontro el evento"
        }),404

    except:
        return({
            "message": "Ha ocurrido un error"
        }),500

@api.route('/event', methods = ['POST'])
def post_event():
    
    body = request.json
    new_event = Event.create(body["title"],
        body["address"],
        body["price"],
        body["description"],
        body["category"],
        body["start_day"],
        body["end_day"],
        body["geolocation"],
        body["img_url"])
        
    if isinstanse(new_event, Event):
        saved = save(new_event)
        if not saved:
            return jsonify({
                "message": "Server down"
            }),500
        return jsonify({
            "message": "evento creado"
        }),201
    return jsonify({
        "message": "No se pudo crear"
    }),500
