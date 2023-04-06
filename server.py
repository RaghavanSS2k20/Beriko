from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
from chatbot import ChatBot
@app.route('/chatbot', methods=['POST'])
def chatbot():
  user_response = request.form['user_input']
  chatbot = ChatBot()
  response = chatbot.start_chat(user_response)
  return response