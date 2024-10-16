// Greatest Common Divisor of Strings

// # Soln : O(N)

var gcdOfStrings = function (str1, str2) {

    if(str1+str2 !== str2+str1) return "";
    else{
        let minlen = Math.min(str1.length, str2.length);
        for(let i=minlen; i>0; i--){
            if((str1.length % i === 0) && (str2.length % i === 0)){
                return str2.substring(0, i);
            }
        }
    }

};

console.log(gcdOfStrings("ABCABC", "ABC"));
