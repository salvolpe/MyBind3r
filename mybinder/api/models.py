from .app import db
from dataclasses import dataclass


@dataclass
class Tag(db.Model):
    __tablename__ = 'tag'

    objectlink: str
    object2link: str
    email: str
    filename: str
    tagtype: str

    objectlink = db.Column(db.String, primary_key=True)
    object2link = db.Column(db.String, primary_key=True)
    email = db.Column(db.String(50), primary_key=True)
    filename = db.Column(db.String, primary_key=True)
    tagtype = db.Column(db.String, primary_key=True)
    __table_args__ = (
        db.ForeignKeyConstraint(
            ['filename', 'email', 'objectlink'],
            ['object.filename', 'object.email', 'object.objectlink'],
            onupdate="CASCADE", ondelete="CASCADE",
        ),
    )

@dataclass
class Object(db.Model):
    __tablename__ = 'object'

    objectlink: str
    filename: str
    email: str
    page: int
    tags: Tag

    objectlink = db.Column(db.String, primary_key=True)
    filename = db.Column(db.String, primary_key=True)
    email = db.Column(db.String(50), primary_key=True)
    page = db.Column(db.Integer)
    tags = db.relationship('Tag', backref="Object", passive_deletes=True, cascade='all, delete, delete-orphan')

    __table_args__ = (
        db.ForeignKeyConstraint(
            ['filename', 'email'],
            ['file.filename', 'file.email'],
            onupdate="CASCADE", ondelete="CASCADE"
        ),
    )

@dataclass
class File(db.Model):
    __tablename__ = 'file'

    email: str
    filename: str
    objects: Object

    email = db.Column(db.String(50), primary_key=True)
    filename = db.Column(db.String, primary_key=True)
    objects = db.relationship('Object', backref="File", passive_deletes=True, cascade='all, delete, delete-orphan')

    __table_args__ = (
        db.ForeignKeyConstraint(
            ['email'],
            ['user.email'],
            onupdate="CASCADE", ondelete="CASCADE",
            
        ),
    )

@dataclass
class User(db.Model):
    __tablename__ = 'user'

    email: str
    password: str
    files: File

    email = db.Column(db.String(50), primary_key=True)
    password = db.Column(db.String)
    files = db.relationship('File', backref="Object", passive_deletes=True, cascade='all, delete, delete-orphan')