function solution(s) {
    let count = 0; // 괄호 개수를 체크하는 변수

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++; // '('를 만나면 count 증가
        } else {
            count--; // ')'를 만나면 count 감소
        }

        // count가 음수가 되면 올바르지 않은 괄호이므로 false 반환
        if (count < 0) {
            return false;
        }
    }

    // count가 0이 아니면 올바르지 않은 괄호이므로 false 반환
    return count === 0;
}
