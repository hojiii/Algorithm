def solution(answers):
    answer = []
    a = [1,2,3,4,5]
    b = [2,1,2,3,2,4,2,5]
    c = [3,3,1,1,2,2,4,4,5,5]
    count = [0,0,0]
    
    for i in range(len(answers)):
        if answers[i] == a[i % len(a)]:
            count[0] += 1
        if answers[i] == b[i % len(b)]:
            count[1] += 1
        if answers[i] == c[i % len(c)]:
            count[2] += 1
    
    maxCount = max(count)
    for i in range(3):
        if maxCount == count[i]:
            answer.append(i+1)
    
    answer.sort()
    
    return answer