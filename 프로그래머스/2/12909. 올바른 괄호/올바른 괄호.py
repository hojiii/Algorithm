def solution(s):
    answer = []
    for i in s :
        if i=="(" : 
            answer.append(i)
        else : 
            if answer:
                answer.pop()
            else:
                return False
    if answer : 
        return False
    return True