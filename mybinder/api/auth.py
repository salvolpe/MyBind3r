import functools
from flask import (
    Blueprint, request, session, jsonify
)
from werkzeug.security import check_password_hash, generate_password_hash
from .app import db
from .models import User

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'GET':
        try:
            session['email']
            return jsonify({'firstname': session['firstname'], 'lastname': session['lastname']}), 200
        except KeyError:
            return jsonify({'error': 'User not logged in.'}), 400
    if request.method == 'POST':
        email = request.get_json()['email']
        password = request.get_json()['password']
        error = None
        user = User.query.get(email)
        dbinfo = User.query.with_entities(User.password, User.firstname, User.lastname).filter(User.email==email).first()

        if user is None:
            error = 'Incorrect email.'
        elif not check_password_hash(dbinfo[0], password):
            error = 'Incorrect password.'

        if error is None:
            session.clear()
            session['email'] = email
            session['firstname'] = dbinfo[1]
            session['lastname'] = dbinfo[2]
            return jsonify(
                {"message": "User {} {} successfully logged in.".format(
                    session['firstname'],
                    session['lastname'])
                }), 200
        else:
            return jsonify({"error": error}), 400

@auth.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        email = request.get_json()['email']
        password = request.get_json()['password']
        firstname = request.get_json()['firstname']
        lastname = request.get_json()['lastname']
        error = None

        if not email:
            error = 'Username is required.'
        elif not password:
            error = 'Password is required.'
        elif User.query.get(email) is not None:
            error = 'User {} is already registered.'.format(email)

        if error is None:
            new_user = User(email=email, password=generate_password_hash(password), firstname=firstname, lastname=lastname)
            db.session.add(new_user)
            db.session.commit()
            return jsonify({"message": "User {} {} successfully registered.".format(firstname, lastname)}), 200
        else:
            return jsonify({"error": error}), 400

@auth.route('/logout', methods=['POST'])
def logout():
    if request.method == 'POST':
        session.clear()
        try:
            session['email']
        except KeyError:
            return jsonify({"message": "Successfully logged out."}), 200
