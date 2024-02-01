def solution(N, stages):
    failRate = []
    totalPeople = len(stages)
    for i in range(1, N+1):
        if totalPeople != 0:
            fail = stages.count(i)/totalPeople
            failRate.append((fail, i))
            totalPeople -= stages.count(i)
        else:
            failRate.append((0, i))
    failRate.sort(key=lambda x: (-x[0], x[1]))
    answer = [stage[1] for stage in failRate]
    return answer