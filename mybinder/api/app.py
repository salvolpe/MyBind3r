from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
import uuid

db = SQLAlchemy()

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app.config['SECRET_KEY'] = uuid.uuid4().hex
db.init_app(app)

from .models import User
with app.app_context():
    db.session.execute("PRAGMA foreign_keys = ON")
    db.create_all()

from .binder import binder
app.register_blueprint(binder)

from .auth import auth
app.register_blueprint(auth)

@app.route('/import', methods=['GET'])
def import_file():
    return jsonify({'test': 'file'}), 201
