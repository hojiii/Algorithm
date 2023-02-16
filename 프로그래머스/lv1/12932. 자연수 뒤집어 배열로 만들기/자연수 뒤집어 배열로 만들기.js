function solution(n) {
    let number = n.toString().split('');
    let answer = [];

    for(let i=number.length-1; i>=0; i--){
        answer.push(Number(number[i]));
    }

    return answer;
}