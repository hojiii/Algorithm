function solution(s, n) {
  let answer = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= 'A' && char <= 'Z') {
      const shifted = String.fromCharCode(((char.charCodeAt() - 65 + n) % 26) + 65);
      answer += shifted;
    }
    else if (char >= 'a' && char <= 'z') {
      const shifted = String.fromCharCode(((char.charCodeAt() - 97 + n) % 26) + 97);
      answer += shifted;
    }
    else {
      answer += char;
    }
  }

  return answer;
}