function solution(t, p) {
  let count = 0;
  const pNum = Number(p);

  for (let i = 0; i <= t.length - p.length; i++) {
    const substrNum = Number(t.substr(i, p.length));
    if (substrNum <= pNum) {
      count++;
    }
  }

  return count;
}