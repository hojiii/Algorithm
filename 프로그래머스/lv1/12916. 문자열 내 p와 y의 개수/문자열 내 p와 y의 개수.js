function solution(str){
    let answer = true;
    let pCount = 0;
    let sCount =0; 
    let dd = str.toLowerCase().split("")
    
    for(i=0;i<dd.length;i++){
        if(dd[i] == 'p'){
            pCount+=1
        }
        if(dd[i]=='y'){
            sCount+=1
        }
    }
    if (pCount != sCount){
        answer = false
    }

    return answer;
}