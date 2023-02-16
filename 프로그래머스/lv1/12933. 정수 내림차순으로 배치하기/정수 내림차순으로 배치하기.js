function solution(n) {
    let number = Number(n.toString().split('').sort((a,b)=>b-a).join(""));
    return number;
}