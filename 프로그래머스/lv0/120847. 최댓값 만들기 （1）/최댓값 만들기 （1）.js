function solution(numbers) {
    let sum = 0
    let sum2 =0
    for(i=0;i<numbers.length;i++){
        sum2 = numbers[i]*numbers[i+1]
        if(sum<sum2){
            sum = sum2
        }else{
            sum=sum
        } 
    }
    return sum
}