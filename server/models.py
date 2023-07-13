from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy import CheckConstraint
from datetime import datetime
from config import db, bcrypt