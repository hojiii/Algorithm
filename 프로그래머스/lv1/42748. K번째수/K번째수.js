function solution(array, commands) {
    let answer = [];
    for (let i = 0; i < commands.length; i++) {
        let new_commands = commands[i];
        let new_array = array.slice(new_commands[0] - 1, new_commands[1]).sort((a, b) => a - b);
        answer.push(new_array[new_commands[2] - 1]);
    }
    return answer;
}