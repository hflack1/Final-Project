import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
from flask import Flask, render_template, redirect

app = Flask(__name__, template_folder='templates')
# from flask import Flask, render_template, jsonify

# Database Setup
postgresStr = ("postgresql://postgres:password@localhost:5432/NFL")
engine = create_engine(postgresStr)

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)

Player = Base.classes.player

# Flask Setup

app = Flask(__name__)
# Flask Routes

@app.route("/")


def home():

    
    #mars_collection = mongo.db.mars_collection.find_one()

    return render_template("index.html")

#def welcome():
#    """List all available api routes."""
#    return (
#        f"Available Routes:<br/>"
#        f"/api/v1.0/names<br/>"
#        f"/api/v1.0/player"
#    )





if __name__ == '__main__':
    app.run(debug=True)
