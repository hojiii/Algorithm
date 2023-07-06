function solution(s) {
    const stack = [];  // 스택으로 활용할 배열

    for (let char of s) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();  // 짝이 맞으면 스택에서 제거
        } else {
            stack.push(char);  // 짝이 아니면 스택에 추가
        }
    }

    return stack.length ? 0 : 1;  // 스택에 남은 문자가 있으면 0, 없으면 1 반환
}