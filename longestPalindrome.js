//(Longest Palindromic Substring)
//Given a string S, find the longest palindromic substring 
//in S. You may assume that the maximum length of S is 1000, 
//and there exists one unique longest palindromic substring.

// function palindrome() {
//     for (var len = s.length; len > 0; --len) {
//         for (var j = 0; j <= s.length - len; ++j) {
//             var sub = s.substring(j, j + len);
//             console.log(sub);
//         }
//     }
// }

function longestPalindrome(str) {
	var n = str.length;
	for(var i = 0; i < n-1; i ++) {
		for(var j = i; j >= 0; j--) {
			if(isPalindrome(str.substring(j, n - (i - j)))) {
				return str.substring(j, n - (i - j));
			}
		}
	}
}


function isPalindrome(str) {
    if (str.length <= 1) {
    	return true;
    }
    if(str[0] === str[str.length -1]) {
    	return isPalindrome(str.substring(1, str.length - 1));
    } else {
    	return false;
    }
}

// var str = 'nao1on';
// console.log(isPalindrome(str));
var longStr = "asdnoonsa";
var op = longestPalindrome(longStr);
console.log(op);