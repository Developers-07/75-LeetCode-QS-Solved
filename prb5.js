
// Reverse Vowels of a String


// # Soln : O(N)

var reverseVowels = function (s) {

    /* s = s.split("");
     let s1 = "";
     for (let i = s.length - 1; i >= 0; i--) {
         if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
             s1 = s1 + s[i];
         }
     }
     let j = 0;
     for (let i = 0; i < s.length; i++) {
         if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u' || s[i] === 'A' || s[i] === 'E' || s[i] === 'I' || s[i] === 'O' || s[i] === 'U') {
             s[i] = s1[j];
             j++;
         }
     }
     return s.join(""); */
 
 
     // using includes();
 
     s = s.split("");
     let s1 = "";
     let vowels = "aeiouAEIOU";
     for (let i = s.length - 1; i >= 0; i--) {
         if (vowels.includes(s[i])) {
             s1 = s1 + s[i];
         }
     }
     let j = 0;
     for (let i = 0; i < s.length; i++) {
         if (vowels.includes(s[i])) {
             s[i] = s1[j];
             j++;
         }
     }
     return s.join("");
 
 };

 console.log(reverseVowels("IceCreAm"));