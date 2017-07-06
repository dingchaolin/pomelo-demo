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