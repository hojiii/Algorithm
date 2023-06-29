function solution(s) {
  const result = [];
  const lastIndex = new Array(26).fill(-1); // 알파벳의 마지막 인덱스 저장 배열

  for (let i = 0; i < s.length; i++) {
    const index = s.charCodeAt(i) - 'a'.charCodeAt(0); // 알파벳을 0부터 25까지의 인덱스로 변환

    // 현재 문자가 이전에 나온 적이 있으면 해당 인덱스 저장
    if (lastIndex[index] !== -1) {
      result.push(i - lastIndex[index]);
    } else {
      result.push(-1);
    }

    lastIndex[index] = i; // 마지막 인덱스 갱신
  }

  return result;
}
