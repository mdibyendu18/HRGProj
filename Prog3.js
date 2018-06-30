/* Write a JS code which will print 
 * Fibonacci series where End value
 * is not greater than 33. (e.g. 0112358) 
 */

function fibonacci(n){
    let arr = [];
    let a = 0, b= 1, c=0;
    arr.push(a);
    arr.push(b);
    while(c<n) {
        c = a+b;
        if (c<n) {
            arr.push(c);
        }
        a = b;
        b = c;
    }

    console.log(arr.toString());
}

n = 33;
fibonacci(33);