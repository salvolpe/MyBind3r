from flask import (
    Blueprint, request, session, jsonify
)
from .app import db
from .models import File, Object, Tag

binder = Blueprint('binder', __name__, url_prefix='/binder')

@binder.before_request
def before_request():
    try:
        session['username']
    except KeyError:
        return jsonify({"error": "User not logged in."}), 401

@binder.route('/files', methods=['GET'])
def files():
    if request.method == 'GET':
        files = File.query.with_entities(File.filename) \
            .filter(File.username==session['username']).all()
        names = [files[i][0] for i in range(len(files))]
        return jsonify({'names': names}), 200

@binder.route('/file/<name>', methods=['GET', 'POST', 'DELETE'])
def myfile(name):
    myfile = File.query.with_entities(File.filename) \
            .filter(File.username==session['username'], File.filename==name).first()
    if request.method == 'GET':
        if myfile is None:
            error = "File {} not found.".format(name)
            return jsonify({"error": error}), 400
        return jsonify({"file": myfile}), 200
    elif request.method == 'POST':
        if myfile is None:
            new_file = File(
                filename=name,
                username=session['username']
            )
            db.session.add(new_file)
            db.session.commit()
            return jsonify({"message": "File {} successfully created.".format(name)}), 200
        print(myfile)
        error = "File {} will be overwritten.".format(name)
        return jsonify({"error": error}), 400
    elif request.method == 'DELETE':
        if myfile:
            File.query.filter(File.username==session['username'], File.filename==name).delete()
            db.session.commit()
            return jsonify({"message": "File {} successfully deleted.".format(name)}), 200
        error = "File {} cannot be deleted as it does not exist.".format(name)
        return jsonify({"error": error}), 400

@binder.route('/file/<filename>/objects', methods=['GET'])
def objects(filename):
    if request.method == 'GET':
        objects = Object.query \
            .filter(Object.username==session['username'], Object.filename==filename).all()
        return jsonify({'objects': objects}), 200

@binder.route('/file/<filename>/<page>/objects', methods=['GET'])
def page_objects(filename, page):
    if request.method == 'GET':
        objects = Object.query \
            .filter(Object.username==session['username'], Object.filename==filename, Object.page==page).all()
        return jsonify({'objects': objects}), 200

@binder.route('/file/<filename>/<page>/object/<name>', methods=['GET', 'POST', 'DELETE'])
def myobject(filename, page, name):
    myobject = Object.query \
            .filter(
                Object.username==session['username'],
                Object.filename==filename,
                Object.objectlink==name
            ).first()
    if request.method == 'GET':
        if myobject is None:
            error = "Object {} not found.".format(name)
            return jsonify({"error": error}), 400
        return jsonify({"message": myobject}), 200
    elif request.method == 'POST':
        if myobject is None:
            new_object = Object(
                objectlink=name,
                filename=filename,
                username=session['username'],
                page=page
            )
            db.session.add(new_object)
            db.session.commit()
            return jsonify({"message": "Object {} successfully created.".format(name)}), 200
        print(myobject)
        error = "Object {} will be overwritten.".format(name)
        return jsonify({"error": error}), 400
    elif request.method == 'DELETE':
        if myobject:
            Object.query.filter(
                Object.username==session['username'],
                Object.filename==filename,
                Object.objectlink==name
            ).delete()
            db.session.commit()
            return jsonify({"message": "Object {} successfully deleted.".format(name)}), 200
        error = "Object {} cannot be deleted as it does not exist.".format(name)
        return jsonify({"error": error}), 400

@binder.route('/file/<filename>/tags', methods=['GET'])
def tags(filename):
    if request.method == 'GET':
        tags = Tag.query \
            .filter(Tag.username==session['username'], Tag.filename==filename).all()
        return jsonify({'tags': tags}), 200

@binder.route('/file/<filename>/tags/<tagtype>', methods=['GET'])
def typed_tags(filename, tagtype):
    if request.method == 'GET':
        tags = Tag.query \
            .filter(Tag.username==session['username'], Tag.filename==filename, Tag.tagtype==tagtype).all()
        return jsonify({'tags': tags}), 200

@binder.route('/file/<filename>/tags/<link1>/<link2>/<tagtype>', methods=['GET', 'POST', 'DELETE'])
def tag(filename, link1, link2, tagtype):
    tag = Tag.query \
            .filter(
                Tag.username==session['username'],
                Tag.filename==filename,
                Tag.objectlink==link1,
                Tag.object2link==link2,
                Tag.tagtype==tagtype
            ).first()
    if request.method == 'GET':
        if tag is None:
            error = "Tag between {} and {} not found.".format(link1, link2)
            return jsonify({"error": error}), 400
        return jsonify({"tags": tag}), 200
    elif request.method == 'POST':
        if tag is None:
            new_tag = Tag(
                objectlink=link1,
                object2link=link2,
                filename=filename,
                username=session['username'],
                tagtype=tagtype
            )
            db.session.add(new_tag)
            db.session.commit()
            return jsonify({"message": "Tag between {} and {} successfully created.".format(link1, link2)}), 200
        error = "Tag between {} and {} will be overwritten.".format(link1, link2)
        return jsonify({"error": error}), 400
    elif request.method == 'DELETE':
        if tag:
            Tag.query.filter(
                Tag.username==session['username'],
                Tag.filename==filename,
                Tag.objectlink==link1,
                Tag.object2link==link2,
                Tag.tagtype==tagtype
            ).delete()
            db.session.commit()
            return jsonify({"message": "Tag between {} and {} successfully deleted.".format(link1, link2)}), 200
        error = "Tag between {} and {} cannot be deleted as it does not exist.".format(link1, link2)
        return jsonify({"error": error}), 400