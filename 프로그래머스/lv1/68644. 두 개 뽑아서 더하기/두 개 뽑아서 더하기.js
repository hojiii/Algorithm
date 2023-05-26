function solution(numbers) {
  let answer = [];
  let num = numbers.sort();

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      let sum = num[i] + num[j];
      if (!answer.includes(sum)) {
        answer.push(sum);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}