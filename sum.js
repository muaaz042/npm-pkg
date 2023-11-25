//This function sum all the previous numbers before the number entered

function add(element){
    let sum = 0;
    for (let i = element; i > 0; i--) {
        sum = sum + i;
    }
    return sum;
}

// Exporting the above add function

module.exports = { add };

