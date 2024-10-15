
// LeetCode Problem - 1768 : Merge Strings Alternately





var mergeAlternately = function (word1, word2) {


// # Soln 1:  O(N)
    
   /*let l1 = word1.length;
    let l2 = word2.length;
    let word3 = "";
    if (l1 === l2) {
        for (let i = 0; i < l1; i++) {
            word3 = word3 + word1[i] + word2[i];
        }
    }
    else if (l1 > l2) {
        for (let i = 0; i < l2; i++) {
            word3 = word3 + word1[i] + word2[i];
        }
        let word = word1.slice(l2, l1);
        word3 = word3 + word;
    }
    else {
        for (let i = 0; i < l1; i++) {
            word3 = word3 + word1[i] + word2[i];
        }
        let word = word2.slice(l1, l2);
        word3 = word3 + word;
    }
    return word3;*/


// # Soln 2: O(M+N)

   /* let l1 = word1.length;
    let l2 = word2.length;
    let word = "";
    let j = 0;
    if (l1 >= l2) {
        for (let i = 0; i < l1; i++) {
            if (j < l2) {
                word = word + word1[i] + word2[j];
                j++;
            }
            else {
                word = word + word1[i];
            }
        }
    }
    else{
        for(let i=0; i<l2; i++){
            if(j<l1){
                word = word + word1[j] + word2[i];
                j++;
            }
            else{
                word = word + word2[i]
            }
        }
    }
    return word; */


// # Soln 3: O(M+N)


    let r = "";
   
   const mlen = Math.max(word1.length, word2.length); 

   for (let i = 0; i < mlen; i++) {
       if (i < word1.length) r += word1[i];
       if (i < word2.length) r += word2[i];
   }
   
   return r;


};

console.log(mergeAlternately("abcd", "pqr"));