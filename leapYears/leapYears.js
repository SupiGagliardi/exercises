const leapYears = function(year) {


    if (Number.isInteger(year / 100) === false && Number.isInteger(year / 4)){
        return true;
    } else if (Number.isInteger(year / 100) === true && Number.isInteger(year / 4) && Number.isInteger(year / 400)){
        return true;
    } else {
        return false
    }



}

module.exports = leapYears

