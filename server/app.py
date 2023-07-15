from flask import request, make_response, session, abort, jsonify
from flask_restful import Resource

from config import app, db, api
from models import Show, Blog

class Home(Resource):
    def get(self):
        return 'how did i get here?'
    
class Shows(Resource):
    def get(self):
        shows = [s.to_dict() for s in Show.query.all()]

        response = make_response(shows, 200)
        return response

api.add_resource(Home, '/')
api.add_resource(Shows, '/shows')

if __name__ == '__main__':
    app.run(port=5555, debug=True)