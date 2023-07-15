from config import db

class Show(db.Model):
    __tablename__ = 'shows'

    id = db.Column(db.Integer, primary_key=True)
    venue = db.column(db.String(64), nullable=False)