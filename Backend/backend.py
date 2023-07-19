import pandas as pd 
import numpy as np
from nltk.corpus import stopwords
sw = stopwords.words('english')
import string

def remove_punctuation(text):
    punctuationfree="".join([i for i in text if i not in string.punctuation])
    return punctuationfree

def remove_stopwords(text):
    result = []
    for token in text:
        if token not in sw:
            result.append(token)
            
    return result

text = "this is the only solution of that question".split() 
