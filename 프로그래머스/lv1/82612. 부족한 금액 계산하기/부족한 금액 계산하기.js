function solution(price, money, count) {
    let answer = 0;
    let pay = 0;
    for(let i =0;i<count+1;i++){
        pay += price * i;
        if(money- pay <0){
           answer = Math.abs(money - pay); 
        }else{
            answer = 0;
        }

    }

    return answer;
}