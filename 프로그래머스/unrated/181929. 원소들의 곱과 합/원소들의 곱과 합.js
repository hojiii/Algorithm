function solution(num_list) {
let answer =0
let a= 1
let b=0
for(i=0;i<num_list.length;i++){
    a*=num_list[i]
    b+=num_list[i]
}
if(b*b>a){
    answer =1
}
    return answer
}