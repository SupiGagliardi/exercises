const reverseString = function(text) {
    
    let string = text;
    let stringArray = string.split('');
    let reversedString = [];
    let lastLetter = stringArray.length - 1;
    
    for (let i = 0; i < string.length; i++){
        reversedString.push(stringArray[lastLetter])
        lastLetter--
    }

    return reversedString.join('')
}

module.exports = reverseString
