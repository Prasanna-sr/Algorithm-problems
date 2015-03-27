/**
 * Sorting which considers numbers, unlike ls
 * input: rice1, rice10, rice2
 * regular LS command op: rice, rice10, rice2
 * output: rice1, rice2, rice10
 */
function sortStr(input) {
    input.sort(function(a, b) {
        for (var i = 0; i < a.length; i++) {
            if ((!a[i] || !b[i]) || (!Number(a[i]) || !(Number(b[i])))) {
            	//one or both character are letters or empty
                if (!b[i] || a[i] > b[i]) {
                    return 1;
                } else if (!a[i] || a[i] < b[i]) {
                    return -1;
                } else {
                    continue;
                }
            } else {
            	//both character are numbers
                var aNumber = '';
                var bNumber = '';
                for (var j = i; j < a.length; j++) {
                    if (!isNaN(Number(a[j]))) {
                        aNumber = aNumber + a[j];
                    } else {
                        break;
                    }
                }
                for (var j = i; j < b.length; j++) {
                    if (!isNaN(Number(b[j]))) {
                        bNumber = bNumber + b[j];
                    } else {
                        break;
                    }
                }
                if (Number(aNumber) > Number(bNumber)) {
                    return 1;
                } else if (Number(aNumber) < Number(bNumber)) {
                    return -1;
                } else {
                    i = j - 1;
                    continue;
                }
            }
        }
        return 0;
    });
return input;
};

//var inputArr = ['rice1', 'rice2a', 'rice10', 'rice2b', 'tomato1', 'tomoato11', 'tomato2'];
var inputArr = ['rice5a', 'rice12345678caa', 'a', '1', 'rice12345678baa', 'rice' ,''];
//var inputArr = ['aaba', 'aabc'];
var op = sortStr(inputArr);
console.log(op);
