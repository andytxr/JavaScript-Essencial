Array.prototype.reduce2 = function(callback, initialValue){

    let initialIndex = initialValue ? 0 : 1;
    let acc = initialValue || this[0];

    for (let i = 1; i < this.length; i++) {
        acc = callback(acc, this[i], i, this);
    }

    return acc

}

const sum = (total, value) => total + value;
const n = [1, 2, 3, 4, 5, 6];

console.log(n.reduce2(sum, 21))