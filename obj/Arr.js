/**
 * Created by User on 2017/7/16.
 */
let arr = [1,2,3];
let arr1 = arr;
let arr2 = new Array( arr );
arr1.push(4);
arr2.push( 5 );

console.log( arr );