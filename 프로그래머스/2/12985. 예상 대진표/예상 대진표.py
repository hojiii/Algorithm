def solution(n,a,b):
    answers = 0
    while a != b:
        answers+=1
        a = (a+1)//2
        b = (b+1)//2 
    
    return answers