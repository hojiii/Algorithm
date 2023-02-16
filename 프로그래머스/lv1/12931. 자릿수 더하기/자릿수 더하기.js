function solution(n)
{
    let answer = 0;
    let string = n+""
    let number =string.split()
    for(let i=0;i<string.length;i++){
        answer+=Number(string[i])
    }

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log(answer)

    return answer;
}