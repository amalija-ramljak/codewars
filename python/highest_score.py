from string import ascii_lowercase

def high(x):
    x = x.split(" ")
    while '' in x:
        x.pop(x.index(''))
    
    score = 0
    highest = None
    for word in x:
        current = 0
        for l in word:
            current += ascii_lowercase.index(l) + 1
        if current > score:
            score = current
            highest = word
    return highest