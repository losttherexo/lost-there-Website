from flask import request, make_response, session, abort
from flask_restful import Resource

from config import app, db, api

class Home(Resource):
    def get(self):
        return 'how did i get here?'

api.add_resource(Home, '/')

if __name__ == '__main__':
    app.run(port=5555, debug=True)