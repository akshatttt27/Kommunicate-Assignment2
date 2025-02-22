function reverseNumber(number) {
    let reversedNumber = 0;
    
    while (number !== 0) {
        let digit = number % 10;
        
        reversedNumber = (reversedNumber * 10) + digit;
        
        number = Math.floor(number / 10);
    }
    
    return reversedNumber;
}
console.log(reverseNumber(531));//Output will be 135
