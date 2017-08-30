/**
 * Created by User on 2017/8/4.
 */
let a = {};
if( a ){
    console.log("真")
}else{
    console.log("假")
}

let arr = [{privatePoint:1},{privatePoint:6},{privatePoint:3},{privatePoint:5},{privatePoint:3},{privatePoint:2}];
//let arr1 = arr;
//arr = arr.filter( item =>{ return item != 2 } )
//console.log( arr );
//console.log( arr1 );

arr.sort( function( a, b){return a.privatePoint-b.privatePoint});

for(var i = 1; i < arr.length; i++) {
    //用当前的元素与他的前一个元素进行对比
    if(arr[i].privatePoint == arr[i - 1].privatePoint) {
        //如果相同的话,就删除掉第i个元素
        arr.splice(i, 1);
    }
}
console.log(arr);