function solution(name, yearning, photo) {
    const scores = [];
    
    for (let i = 0; i < photo.length; i++) {
        let score = 0;
        
        for (let j = 0; j < photo[i].length; j++) {
            const person = photo[i][j];
            const index = name.indexOf(person);
            
            if (index !== -1) {
                score += yearning[index];
            }
        }
        
        scores.push(score);
    }
    
    return scores;
}