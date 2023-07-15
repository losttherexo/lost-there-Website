from flask import request, make_response, session, abort, jsonify
from flask_restful import Resource

from config import app, db, api, mailchimp
from models import Show, Blog

response = mailchimp.ping.get()
print(response)

class Home(Resource):
    def get(self):
        return 'how did i get here?'
    
class Newsletter(Resource):
    def post(self):
        pass
    
class Shows(Resource):
    def get(self):
        shows = [s.to_dict() for s in Show.query.all()]

        response = make_response(shows, 200)
        return response
    
class Blogs(Resource):
    def get(self):
        blogs = [b.to_dict() for b in Blog.query.all()]

        response = make_response(blogs, 200)
        return response

api.add_resource(Home, '/')
api.add_resource(Shows, '/shows')
api.add_resource(Blogs, '/blogs')

if __name__ == '__main__':
    app.run(port=5555, debug=True)