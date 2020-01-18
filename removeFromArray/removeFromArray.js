const removeFromArray = function (array, elem1, elem2, elem3, elem4) {
    let changedArray = array;
    let allElements = [elem1, elem2, elem3, elem4];

    for (let i = 0; i < allElements.length; i++) {
        
        let elemIndex = changedArray.indexOf(allElements[i]);
        
        if (allElements[i] === undefined) {
            continue;
        } else if (elemIndex === -1) {
            continue;
        } else {
            changedArray.splice(elemIndex, 1);
        }
    }
    return changedArray;
}


module.exports = removeFromArray

