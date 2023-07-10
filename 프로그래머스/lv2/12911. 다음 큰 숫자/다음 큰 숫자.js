function solution(n) {
    let octal = n.toString(2).split('')
    let cnt = octal.filter((i)=>i==='1').length
    let cnt2;
    while(cnt !==cnt2){
        ++n;
        cnt2 = n.toString(2).split('').filter((i)=>i ==='1').length
    }
    return n;
}