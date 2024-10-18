
// Reverse Words in a String


// # Soln: O(N)


var reverseWords = function (s) {
    /* let newStr = s.trim().replace(/\s+/g, ' ');
     let resStr = "";
     let e = newStr.length;
     for(let i=newStr.length-1; i>=0; i--){
         if(newStr[i] === " " || i === 0){
             let str = "";
             if(i === 0){
                 str = newStr.slice(i, e);
                 resStr = resStr + str;
             }
             else{
                 str = newStr.slice(i+1, e);
                 resStr = resStr + str + " ";
             }
 
             e = i;
         }
     }
     return resStr; */


    // Another Easy way

    s = s.trim();
    s = s.replace(/\s+/g, " ");
    s = s.split(" ").reverse().join(" ");
    return s;

};

console.log(reverseWords(" a good   example"));