import string
import pandas as pd
import numpy as np
import re
print(string.punctuation)
def clean_text(text):
    # Remove HTML tags
    clean = re.compile('<.*?>')
    text = re.sub(clean, '', text)
    
    # Remove punctuation marks and special characters
    
    
    # Convert text to lowercase
    
    
    return text
def remove_punctuation(text):
    punctuationfree="".join([i for i in text if i not in string.punctuation])
    return punctuationfree
def tokenization(text):
    tokens = re.split('W+',text)
    return tokens
#applying function to the column
#data['msg_tokenied']= data['msg_clelower'].apply(lambda x: tokenization(x))

jeopardy_df = pd.read_csv("dataset\JEOPARDY_CSV.csv")
jeopardy_df=jeopardy_df.dropna()
encoder_data = jeopardy_df[' Question']
decoder_data = jeopardy_df[' Answer']
cleaned_encoder_data = encoder_data.apply(remove_punctuation)
cleaned_decoder_data = decoder_data.apply(remove_punctuation)
cleaned_encoder_data_tokens = cleaned_encoder_data.apply(tokenization)

cleaned_decoder_data_tokens = cleaned_decoder_data.apply(tokenization)

input_tokens = [token for seq in cleaned_encoder_data_tokens for token in seq]
output_tokens = [token for seq in cleaned_decoder_data_tokens for token in seq]
num_encoder_tokens = len(input_tokens)
num_decoder_tokens = len(output_tokens)
# Create a set of unique tokens
# max_encoder_seq_length = max([len(re.findall(r"[\w']+|[^\s\w]", input_doc)) for input_doc in input_docs])
# max_decoder_seq_length = max([len(re.findall(r"[\w']+|[^\s\w]", target_doc)) for target_doc in target_docs])
max_encoder_seq_length = 100  # maximum length of input sequences
max_decoder_seq_length = 6  # maximum length of output sequences

# create dictionaries to map words to integers
input_vocab = set()
output_vocab = set()
for input_seq, output_seq in zip(cleaned_encoder_data_tokens, cleaned_decoder_data_tokens):
    input_vocab.update(input_seq)
    output_vocab.update(output_seq)

input_token_index = dict([(word, i+1) for i, word in enumerate(input_vocab)])
output_token_index = dict([(word, i+1) for i, word in enumerate(output_vocab)])

# initialize numpy arrays to store the data
num_samples = len(cleaned_encoder_data_tokens)
encoder_input_data = np.zeros((num_samples, max_encoder_seq_length), dtype='float32')
decoder_input_data = np.zeros((num_samples, max_decoder_seq_length), dtype='float32')
decoder_target_data = np.zeros((num_samples, max_decoder_seq_length, len(output_vocab)+1), dtype='float32')
for i, (input_seq, target_seq) in enumerate(zip(cleaned_encoder_data_tokens, cleaned_decoder_data_tokens)):
    for t, token in enumerate(input_seq):
        encoder_input_data[i, t] = input_token_index[token]
    for t, token in enumerate(target_seq):
        decoder_input_data[i, t] = output_token_index[token]
        if t > 0:
            decoder_target_data[i, t-1, output_token_index[token]] = 1

from tensorflow import keras
from keras.layers import Input, LSTM, Dense
from keras.models import Model
#Dimensionality
dimensionality = 256
#The batch size and number of epochs
batch_size = 10
epochs = 600
#Encoder
encoder_inputs = Input(shape=(None, num_encoder_tokens))
encoder_lstm = LSTM(dimensionality, return_state=True)
encoder_outputs, state_hidden, state_cell = encoder_lstm(encoder_inputs)
encoder_states = [state_hidden, state_cell]
#Decoder
decoder_inputs = Input(shape=(None, num_decoder_tokens))
decoder_lstm = LSTM(dimensionality, return_sequences=True, return_state=True)
decoder_outputs, decoder_state_hidden, decoder_state_cell = decoder_lstm(decoder_inputs, initial_state=encoder_states)
decoder_dense = Dense(num_decoder_tokens, activation='softmax')
decoder_outputs = decoder_dense(decoder_outputs)
#Model
training_model = Model([encoder_inputs, decoder_inputs], decoder_outputs)
#Compiling
training_model.compile(optimizer='rmsprop', loss='categorical_crossentropy', metrics=['accuracy'], sample_weight_mode='temporal')
#Training
training_model.fit([encoder_input_data, decoder_input_data], decoder_target_data, batch_size = batch_size, epochs = epochs, validation_split = 0.2)
training_model.save('training_model.h5')
   