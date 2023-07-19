from flask import Flask,jsonify
from flask_cors import CORS
import os

import openai
openai.api_key = "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"
app = Flask(__name__)
CORS(app)
@app.route('/')
def home():
    response = {'status':200,
                'message':'hello'}
    return jsonify(response)

@app.route('/api/<prompt>')
def index(prompt):
    response = openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt,
    temperature=0.5,
    max_tokens=3000,
    top_p=1,
    frequency_penalty=0.5,
    presence_penalty=0,)
    data = {
        'status':200,
        'prompt':prompt,
        'data':response
    }
    APIresponse = jsonify(data)
    return APIresponse
app.run(debug=True)