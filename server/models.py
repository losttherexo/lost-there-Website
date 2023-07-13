from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import CheckConstraint
from datetime import datetime
from config import db, bcrypt

class Show(db.Model, SerializerMixin):
    __tablename__ = 'shows'

    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable = False)
    venue = db.Column(db.String(100), nullable=False)
    location = db.Column(db.String(50), nullable=False)
    ticket_link = db.Column(db.String, nullable=False)

    def __repr__(self):
        return f'Show {self.id} at {self.venue} on {self.date}'
    
