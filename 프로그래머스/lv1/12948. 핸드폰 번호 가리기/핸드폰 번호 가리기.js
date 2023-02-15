function solution(phone_number) {
    let number = phone_number.length -4;
    number="*".repeat(number)+phone_number.slice(-4)
    
    return number;
}