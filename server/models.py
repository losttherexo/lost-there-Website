from datetime import datetime
from config import db

class Show(db.Model):
    __tablename__ = 'shows'

    id = db.Column(db.Integer, primary_key=True)
    venue = db.Column(db.String(64), nullable=False)
    location = db.Column(db.String(64), nullable=False)
    date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)

    def __repr__(self):
        return f'Show {self.id}: Live at {self.venue} on {self.date}'
    


