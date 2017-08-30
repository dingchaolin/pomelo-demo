/**
 * Created by User on 2017/7/16.
 */
let arr = [1,2,3];
let arr1 = arr;
let arr2 = new Array( arr );
arr1.push(4);
arr2.push( 5 );

//console.log( arr );


let a = {a:1};

let b= a;
b.a = 2;

//console.log( a, b )

let obj = {}
//obj.a = ""

if( obj.a ){
    console.log("zhen")
}else {
    console.log("jia")
}

