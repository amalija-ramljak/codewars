from math import sqrt

def is_square(n):  
    if n < 0:
        return False
    root = sqrt(n)
    return root == int(root)
    