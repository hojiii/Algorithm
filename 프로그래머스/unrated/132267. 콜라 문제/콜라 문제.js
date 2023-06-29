function solution(a, b, n) {
    let d = 0;

    while (a <= n) {
        let newCola = Math.floor(n / a) * b; // 새로 받은 콜라
        let remainingBottles = n % a; // 받고 남은 공병 개수
        n = newCola + remainingBottles; // 최종 공병 개수
        d += newCola; // 총 콜라 개수 누적
    }

    return d;
}