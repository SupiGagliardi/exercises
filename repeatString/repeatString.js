const repeatString = function (text, num) {
    let string = '';
    if (num === 0) {
        return string;
    } else if (num === -1){
        string = 'ERROR'
    } else {
        for (let i = 0; i < num; i++) {
            string = string + text;
        }
    }

    return string;
}

module.exports = repeatString
