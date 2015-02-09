/**
* Merge sort for array of integers
**/
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        var middle = Math.round(arr.length / 2);
        var arr1 = arr.splice(0, middle);
        var arr2 = arr;
        return merge(mergeSort(arr1), mergeSort(arr2));
    }
}

function merge(arr1, arr2) {
    var sortedArr = [];
    var i = 0;
    var j = 0;
    while (arr1[i] !== undefined || arr2[j] !== undefined) {
        if (arr2[j] === undefined || (arr1[i] !== undefined && arr2[j] >= arr1[i])) {
            sortedArr.push(arr1[i]);
            i++;
        } else {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    return sortedArr;
}

var arr = [2, 2, 1, 3, 4, -3, 0, 1, 3];
console.log(mergeSort(arr));