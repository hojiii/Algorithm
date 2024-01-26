def solution(n):
    a = ''
    while n > 0:
        n, mod = divmod(n,3)
        a += str(mod)
        print(int(a, 3))
    return int(a, 3)