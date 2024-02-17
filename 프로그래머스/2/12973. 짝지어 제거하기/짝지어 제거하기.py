def solution(s):
    answer = 0
    stackS = []
    # [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.    
    
    
    for i in range(len(s)):
        if len(stackS) == 0:
            stackS.append(s[i])
        elif stackS[-1] == s[i]:
            stackS.pop()
        else:
            stackS.append(s[i])
    
    if len(stackS) == 0:
        return 1
    
    return answer