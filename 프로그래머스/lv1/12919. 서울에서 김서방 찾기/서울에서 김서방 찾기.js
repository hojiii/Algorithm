//function solution(seoul) {
    //var answer = '';
    //for(let i=0;i<seoul.length;i++){
        //if(seoul[i]=="Kim"){
           //var local=i
       // }
  //  }
   // return answer=`김서방은 ${local}에 있다.`;
//}

function solution(seoul) {
    
    if (seoul.length){
        let local = seoul.indexOf('Kim')
        return '김서방은 '+local+'에 있다'
    }
    
}