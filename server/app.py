import json
import time
from flask import request, make_response, session, abort, jsonify
from flask_restful import Resource

from config import app, db, api, mailchimp, list_id
from models import Show, Blog
from mailchimp_marketing.api_client import ApiClientError

email_queue = []
operations = []
last_batch_time = time.time()

def time_since_last_batch():
    global last_batch_time
    return time.time() - last_batch_time

class Home(Resource):
    def get(self):
        return 'how did i get here?'
    
class Newsletter(Resource):
    def post(self):
        try:
            new_email = request.get_json()
            email_queue.append(new_email)

            for email in email_queue:
                operation = {
                    "method": "POST",
                    "path": f"/lists/{list_id}/members",
                    "body": json.dumps({
                        "email_address": email['email'],
                        "status": "subscribed"
                    })
                }
                operations.append(operation)

            payload = {
                "operations": operations
            }

            if len(operations) >= 500 or time_since_last_batch() >= 60:
                mailchimp.batches.start(payload)
                global last_batch_time
                last_batch_time = time.time()
                email_queue.clear()
                operations.clear()
    
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