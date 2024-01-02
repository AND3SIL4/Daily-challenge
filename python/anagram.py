def sortString(string):
    return ''.join(sorted(string.lower()))

def isAnamgra(wordOne, wordTwo):
    if wordOne.lower() == wordTwo.lower():
        return False
    
    return sortString(wordOne) == sortString(wordTwo)

print(isAnamgra('CARA', 'ARC'))


