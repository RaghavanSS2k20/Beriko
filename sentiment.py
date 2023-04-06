import text2emotion
def detect_emotions(input):
    emodict =  text2emotion.get_emotion(input)
    sorted_dict_desc = dict(sorted(emodict.items(), key=lambda x: x[1], reverse=True))
    return sorted_dict_desc

# Print the sorted dictionary in descending order


# my_dict = {'apple': 10, 'banana': 5, 'orange': 20, 'pear': 15}

# first_key = next(iter(my_dict))

# # Print the first key
# print(first_key)