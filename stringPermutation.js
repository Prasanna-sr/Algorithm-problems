//Find all permutations of a string
//ab ab ba
//for abc
//abc cab bac cba
//a d ad b bd c cd bc bcd ac acd ab abd 
//ab c ab c + a bc
//c abc ab c abc bc
function stringPermutation(str) {
    var arr = [];
    if (str == null) {
        return [];
    }
    if (str && str.length === 1) {
        return [str];
    } else {
        var a = str[0];
        var res = stringPermutation(str.substring(1));
        for (var i = 0; i < str.length; i++) {
            res.forEach(function(item) {
                item = item.substring(0, i) + a + item.substring(i);
                arr.push(item);
            });
        }
    }

    return arr;
}
var str = 'abc';
var op = stringPermutation(str);
console.log(op);
