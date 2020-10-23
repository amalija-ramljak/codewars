def namelist(names):
    if len(names) == 0:
        return ''
    if len(names) == 1:
        return names[0]['name']
    str = ''
    for i, name in enumerate(names):
        n = name['name']
        if i == len(names) - 1:
            str += n
        elif i == len(names) - 2:
            str += n + ' & '
        else:
            str += n + ', '
    return str