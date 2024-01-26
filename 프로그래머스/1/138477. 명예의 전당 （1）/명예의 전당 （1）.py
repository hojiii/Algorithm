def solution(k, score):
    answer = []
    k_list = []
   
    for i in score:
        k_list.append(i)
        if(len(k_list)>k):
            k_list.remove(min(k_list))
        answer.append(min(k_list))
    return answer