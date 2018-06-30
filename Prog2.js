
/* Write a JS code for finding the maximum 
 * repeated string in an array (e.g. var arr = 
 * [ “and”,”I”,”and”,”am”,”and “ I”,”and”])
*/

var arr = [ "and","I","and","am","and","I","and"];

function maxRepeated(arr) {
    // Initializing a new map data structure
    let map = new Map();

    /* Iterating through the input array
     * and putting each element as keys and their
     * occurences as values in the map
     */
    for(let temp of arr) {
        if(map.has(temp)) {
            map.set(temp, map.get(temp)+1);
        } else {
            map.set(temp, 1); 
        }

    }
    
    // Sort the map by values in descending order
    const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));

    // Convert the keys in the map to arrays and get the first ellement
    console.log(`The maximum repeated string is "${Array.from(mapSort.keys())[0]}"`);
}

maxRepeated(arr);