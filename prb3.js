//  Kids With the Greatest Number of Candies

// # Soln : O(N)

var kidsWithCandies = function(candies, extraCandies) {
    let maxCand = Math.max(...candies);
    let arr = [];
    for(let i=0; i<candies.length; i++){
        let total = candies[i] + extraCandies;
        if(total >= maxCand) arr.push(true);
        else arr.push(false);
    }
    return arr;
};

console.log(kidsWithCandies([2,3,5,1,4], 3));