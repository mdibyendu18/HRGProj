/* Write a JS code. Given an array of integers, 
 * find the closest value to the given number. 
 * The array may contain duplicate values and
 *  negative numbers. (Example : Array : 2,5,8,8,9,6,7,3 Target number : 5 Output : 5)
 * (Target number : 11 Output : 9)(Target Number : 4 Output : 5)
 */

function findClosest( arr,  target)
{
     n = arr.length;

    // Corner cases
    if (target <= arr[0])
        return arr[0];
    if (target >= arr[n - 1])
        return arr[n - 1];

    // Doing binary search 
    let i = 0, j = n, mid = 0;
    while (i < j) {
        mid = (i + j) / 2;

        if (arr[mid] == target)
            return arr[mid];

        /* If target is less than array element,
           then search in left */
        if (target < arr[mid]) {
    
            // If target is greater than previous
            // to mid, return closest of two
            if (mid > 0 && target > arr[mid - 1]) 
                return getClosest(arr[mid - 1], 
                              arr[mid], target);
             
            /* Repeat for left half */
            j = mid;              
        }

        // If target is greater than mid
        else {
            if (mid < n-1 && target < arr[mid + 1]) 
                return getClosest(arr[mid], 
                        arr[mid + 1], target);                
            i = mid + 1; // update i
        }
    }
         
    // Only single element left after search
    return arr[mid];
}
         



// Method to compare which one is the more close
// We find the closest by taking the difference
// between the target and both values. It assumes
// that val2 is greater than val1 and target lies
// between these two.
function  getClosest( val1,  val2,  target)
{
    if (target - val1 >= val2 - target) 
    return val2;	 
    else
    return val1;	 
}
array = [2,5,8,8,9,6,7,3];
number = 11;
console.log(findClosest(array.sort(), number));