//find the largest subsequence given an array that yields the largest sum.

function largestSubsequence(arr) {
    var start = 0;
    var end;
    var largestSum = 0;
    var tempSum1 = 0;
    var tempSum2 = 0;
    var neg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            neg = 0;
            while (arr[i] < 0) {
                neg = neg + arr[i];
                i++;
            }
            tempSum2 = 0;
            while (arr[i] < 0) {
                tempSum2 = tempSum2 + arr[i];
                i++;
            }

            if ((largestSum + neg) > tempSum2) {
                largestSum = largestSum + neg + tempSum2;
            } else {
                largestSum = tempSum2;
            }
            i --;
            tempsum1 = 0;
        } else {
            largestSum = largestSum + arr[i];
        }

    }
    return largestSum;
}

var arr = [1, -3, 2, -2, 3, 1, 4, -2, 1,4];
var op = largestSubsequence(arr);
console.log(op);
