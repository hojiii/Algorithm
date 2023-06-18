function solution(s) {

  const words = s.split(' ');
  const jadenCasedWords = words.map((word) => {
    const firstChar = word.charAt(0).toUpperCase();
    const restChars = word.slice(1).toLowerCase();

    return firstChar + restChars;
  });


  const jadenCasedString = jadenCasedWords.join(' ');
  return jadenCasedString;
}