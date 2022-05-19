const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function binarySeach(list, item) {
    let first = 0;
    let last = list.length - 1;
    let position = -1;
    let found = false;
    let middle;

    while (found === false && first <= last) {
        middle = Math.floor((first + last) / 2);
        if (list[middle] === item) {
            found = true;
            position = middle;
        } else if (list[middle] > item) { 
            last = middle - 1;
        } else {
            first = middle + 1;
        }
    }
    return position;
}

console.log(binarySeach(list, 3));
