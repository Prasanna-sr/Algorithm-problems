/**
 * Given an array of integers find
 * triplet that sums to zero
 */
/**
 * Input: [-2, -3, 3, 2, 4, 5, 7, -2]
 * Output: [-2, 1, 2]
 */
function tripletSumsZero(inputArr) {
	var results = [];
	inputArr.sort();
	var resultFlag = 0;
    for (var i = 0; i < inputArr.length - 2; i++) {
        var j = i + 1;
        var k = inputArr.length - 1;
        while (j <= k) {
        	var sum = inputArr[i] + inputArr[j] + inputArr[k];
        	if(sum === 0) {
				results.push(inputArr[i]);
				results.push(inputArr[j]);
				results.push(inputArr[k]);
				resultFlag = 1;
				break;
        	} else if (sum > 0) {
        		k --;
        	} else if( sum < 0) {
        		j ++;
        	}
        }
        if(resultFlag === 1) {
        	break;
        }
    }
    return results;
}

var arr = [-2, -3, 3, 2, 4, 7, -2];
var op = tripletSumsZero(arr);
console.log(op);
