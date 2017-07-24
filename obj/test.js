/**
 * Created by dcl on 2017/7/6.
 */
var obj = {
    a:[]
} ;
var tempObj = obj.a;

var test = function( testObj ){
    testObj.push({a:1,b:2});
}

test( tempObj );

console.log( obj );

let arrObj = [1,2,3,4];

let temp = arrObj;

temp[2] = 55555;

console.log( arrObj )


let time1  = +new Date( "2017-07-10"||"" );
let date = new Date( );
let time = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;
time = + new Date( time );

console.log( time1, time )