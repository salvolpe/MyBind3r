import functools
from flask import (
    Blueprint, request, session, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from .app import db
from .models import User

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        username = request.get_json()['username']
        password = request.get_json()['password']
        error = None
        user = User.query.get(username)
        dbpassword = User.query.with_entities(User.password).filter(User.username==username).first()[0]

        if user is None:
            error = 'Incorrect username.'
        elif not check_password_hash(dbpassword, password):
            error = 'Incorrect password.'

        if error is None:
            session.clear()
            session['username'] = username
            return jsonify({"message": "User {} successfully logged in.".format(username)}), 200
        else:
            return jsonify({"error": error}), 400

@auth.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        username = request.get_json()['username']
        password = request.get_json()['password']
        error = None

        if not username:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'
        elif User.query.get(username) is not None:
            error = 'User {} is already registered.'.format(username)

        if error is None:
            new_user = User(username=username, password=generate_password_hash(password))
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"message": "User {} successfully registered.".format(username)}), 200
        else:
            return jsonify({"error": error}), 400
