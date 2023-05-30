function solution(d, budget) {
    let c = d.sort((a, b) => a - b);
    let sum = 0
    let result = 0
    for(i=0;i<c.length;i++){
        sum+=c[i]
        if(sum<=budget){
            result++
        }else{
            break
        }  
    }
    return result
}