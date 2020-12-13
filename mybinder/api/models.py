from .app import db
from dataclasses import dataclass

@dataclass
class Tag(db.Model):
    __tablename__ = 'tag'

    objectlink: str
    object2link: str
    filename: str
    tagtype: str

    objectlink = db.Column(db.String, db.ForeignKey('object.objectlink', ondelete='CASCADE'), primary_key=True)
    object2link = db.Column(db.String, primary_key=True)
    filename = db.Column(db.String, db.ForeignKey('file.filename'))
    tagtype = db.Column(db.String)

@dataclass
class Object(db.Model):
    __tablename__ = 'object'

    objectlink: str
    filename: str
    page: int
    tags: Tag

    objectlink = db.Column(db.String, primary_key=True)
    filename = db.Column(db.String, db.ForeignKey('file.filename', ondelete='CASCADE'))
    page = db.Column(db.Integer)
    tags = db.relationship('Tag', passive_deletes=True)

@dataclass
class File(db.Model):
    __tablename__ = 'file'

    username: str
    filename: str
    objects: Object

    username = db.Column(db.String(50), db.ForeignKey('user.username', ondelete='CASCADE'), primary_key=True)
    filename = db.Column(db.String, primary_key=True)
    objects = db.relationship('Object', passive_deletes=True)

@dataclass
class User(db.Model):
    __tablename__ = 'user'

    username: str
    password: str
    files: File

    username = db.Column(db.String(50), primary_key=True)
    password = db.Column(db.String)
    files = db.relationship('File', passive_deletes=True)