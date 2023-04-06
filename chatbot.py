class ChatBot:
  negative_responses = ("no", "nope", "nah", "naw", "not a chance", "sorry")
  exit_commands = ("quit", "pause", "exit", "goodbye", "bye", "later", "stop")
  empathy_postive = ("Beriko is so happy for you!","**senses some excitement in your words!**","It's always great to hear good news like this!","It's amazing how things are working out for you!")
  empathy_postive_small = ("you're doing great!","Making progress!","Nice work!","Keep going","Beriko is Proud of you!")

  empathy_surprise  = ("Whoa, unexpected!","Wow, didn't see that coming!","Take a breath","Let's talk about it - surprises can be a lot to process.")
  empathy_little_surprise = ("Oh, interesting!","Well, that's a surprise!","I can see that caught you off guard.","Wow, that's unexpected!","Haha, that's a pleasant surprise!")

  empathy_sad = ("Beriko is here for you.","Take your time to process your feelings.","I'm sorry you're feeling down.","**Beriko hugs**","It's okay to not be okay.",
"You're not alone, Beriko is here to support you.")
  empathy_angry = ("Take a deep breath and let's talk about it.","I hear you and I'm here to support you.")
  empathy_little_sad = ("I'm sorry to hear that.","Sending positive vibes your way.","Take care of yourself.","Hope you feel better soon.","You're not alone in feeling this way.")
  #Method to start the conversation
  def start_chat(self, user_response):
    if user_response in self.negative_responses:
      return "Ok, have a great day!"
    return self.chat(user_response)
  #Method to handle the conversation
  def chat(self, reply):
    response = self.generate_response(reply)
    if self.make_exit(response):
      return "Ok, have a great day!"
    return response

  #Method to convert user input into a matrix
  def string_to_matrix(self, user_input):
    tokens = re.findall(r"[\w']+|[^\s\w]", user_input)
    user_input_matrix = np.zeros(
      (1, max_encoder_seq_length, num_encoder_tokens),
      dtype='float32')
    for timestep, token in enumerate(tokens):
      if token in input_features_dict:
        user_input_matrix[0, timestep, input_features_dict[token]] = 1.
    return user_input_matrix

  #Method that will create a response using seq2seq model we built
  def generate_response(self, user_input):
    input_matrix = self.string_to_matrix(user_input)
    chatbot_response = decode_response(input_matrix)
    #Remove <START> and <END> tokens from chatbot_response
    chatbot_response = chatbot_response.replace("<START>",'')
    chatbot_response = chatbot_response.replace("<END>",'')
    return chatbot_response

  #Method to check for exit commands
  def make_exit(self, reply):
    for exit_command in self.exit_commands:
      if exit_command in reply:
        return True
    return False