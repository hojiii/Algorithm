function solution(x) {
    var answer = true;
    console.log(x.toString())
    let arr=x.toString().split("")
    console.log(arr)
    let sum =0
    for(let i=0;i<arr.length;i++){
        sum +=Number(arr[i])
    }
    if(x%sum!=0) return false
    return answer;
}