/**
 * Created by dcl on 2017/6/26.
 */


var date = new Date( );
var time = date.getFullYear() + "-" + (date.getMonth() < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1)) + "-" + (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) ;

console.log( time )

let time1 = `2017-06-27`;

if( time1 != time ){
    console.log( + new Date(time), + new Date(time1) , (+ new Date(time) < + new Date(time1)) )
}

let timeStr = new Date(+new Date(time1)).toLocaleString();
console.log( timeStr );//2017-6-27 08:00:00