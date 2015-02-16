//Longest Substring Without Repeating Characters

//Given a string, find the length of the longest substring without 
// repeating characters. For example, the longest substring without 
//repeating letters for “abcabcbb” is “abc”, which the length is 3. 
//For “bbbbb” the longest substring is “b”, with the length of 1.

var str = 'abcabcddddefghbb';
var longSubstr = longestSubstring(str);
console.log(longSubstr);

function longestSubstring(str) {
    var obj = {};
    var tempCh;
    var start = 0;
    var longString = "";

    for (var j = 0; j < str.length; j++) {
        tempCh = str[j];
        if (!obj[tempCh]) {
            obj[tempCh] = true;
        } else {
            var tempSubstr = str.substring(start, j);
            if (longString.length < tempSubstr.length) {
                longString = tempSubstr;
            }
            start = j;
            // clear all values for keys
            for (var key in obj) {
                obj[key] = false;
            }
        }
    }
    return longString;
}