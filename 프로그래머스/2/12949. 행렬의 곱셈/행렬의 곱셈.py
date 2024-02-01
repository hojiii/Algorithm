def solution(arr1, arr2):
    answer = []
    a=len(arr1)
    b=len(arr1[0])
    c=len(arr2[0])
    for i in range(a):
        index_arr = []
         #arr1의 첫번째~배열
        for j in range(c):
            #arr1 베열안에 인덱스 순서
            sum = 0
            for k in range(b):
                #arr1 각 배열의 행
                #arr2 각 배열의 열
                sum += (arr1[i][k]*arr2[k][j])
            index_arr.append(sum)
        answer.append(index_arr)
    return answer
            