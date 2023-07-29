from flask import request, make_response, session, abort, jsonify
from flask_restful import Resource

from config import app, db, api, mailchimp
from models import Show, Blog
from mailchimp_marketing.api_client import ApiClientError

email_queue = []

class Home(Resource):
    def get(self):
        return 'how did i get here?'
    
class Newsletter(Resource):
    def post(self):
        try:
            new_email = request.get_json()
            email_queue.append(new_email)

            print(new_email)

            # batch = mailchimp.lists.batch_list_members("1eaa849ef3", {"members": email_queue})
            # print(batch)

            response = make_response('Emails added to newsletter!', 200)
            return response

        except Exception as e:
            response = make_response(f'Error: {str(e)}', 500)
            return response

        
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
api.add_resource(Newsletter, '/email_list')

if __name__ == '__main__':
    app.run(port=5555, debug=True)