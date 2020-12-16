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
        email = request.get_json()['email']
        password = request.get_json()['password']
        error = None
        user = User.query.get(email)
        dbpassword = User.query.with_entities(User.password).filter(User.email==email).first()


        if user is None:
            error = 'Incorrect email.'
        elif not check_password_hash(dbpassword[0], password):
            error = 'Incorrect password.'

        if error is None:
            session.clear()
            session['email'] = email
            return jsonify({"message": "User {} successfully logged in.".format(email)}), 200
        else:
            return jsonify({"error": error}), 400

@auth.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        email = request.get_json()['email']
        password = request.get_json()['password']
        error = None

        if not email:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'
        elif User.query.get(email) is not None:
            error = 'User {} is already registered.'.format(email)

        if error is None:
            new_user = User(email=email, password=generate_password_hash(password))
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"message": "User {} successfully registered.".format(email)}), 200
        else:
            return jsonify({"error": error}), 400
