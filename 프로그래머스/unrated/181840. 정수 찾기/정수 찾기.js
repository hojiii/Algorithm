function solution(num_list, n) {
    let count = 0
    for(let i =0;i<num_list.length;i++){
        if(num_list[i] == n){
            count=1
        }
    }
    return count;
}