let arr = [1, 5, 7, -1, 5];
let sum = 6;
//https://www.geeksforgeeks.org/print-all-pairs-with-given-sum/
//Find all pairs in arr that sum upto 6
//create hashmap or an object.

function printPairs(arr, sum) {
    let mymap = new Map();
    for(let i=0; i < arr.length; i++) {
        let complement = sum - arr[i];
        if(!mymap.has(complement)) {
            mymap.set(arr[i], 1);
        }
    }
}