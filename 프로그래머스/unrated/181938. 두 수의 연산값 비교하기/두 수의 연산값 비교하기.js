function solution(a, b) {
    let answer = 0;
    let c = String(a)+String(b)
    let nc = Number(c)
    let sum  = 2*a*b
    if(nc > sum ){
        answer = nc
    }else{
        answer = sum
    }
    return answer;
}