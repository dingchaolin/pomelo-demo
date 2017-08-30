/**
 * Created by User on 2017/7/26.
 */
//let arr = [
//    0,0,0,    1,3,  6,7,8, 10,10,  23,24,25,  //第一个人的手牌
//    9,9,9,    1,3,  6,7,8, 4,11,    23,24,25,   //第二个人的手牌
//    18,18,18, 1,3,  6,7,8, 4,4,  23,24,25, //第三个人的手牌
//    26,26,26, 1,3,  6,7,8, 11,11,  23,24,25, //第四个人的手牌
//    19,//第一个人抓的第一张牌
//    15,//宝牌
//    15,15,19,15,
//    18,2,
//    10,10,11,9,
//    12,12,12,12,
//    13,13,13,13,
//    14,14,14,14,
//    5,5,5,5,
//    16,16,16,16,
//    4,17,17,17,
//    19,19,21,17,
//    20,20,20,20,
//    21,21,21,22,
//    0,2,2,2,//分张
//    31,31,31,31,26,22,22,22];

//console.log( arr.length )


var arr = [
    {privatePoint:1},
    {privatePoint:2},
    {privatePoint:3},
    {privatePoint:6},
    {privatePoint:2},
    {privatePoint:9},
    {privatePoint:9},
    {privatePoint:2},
    {privatePoint:3},
    {privatePoint:4},
    {privatePoint:5}
   ];
let arrDel = [
    {privatePoint:2},
    {privatePoint:9}
];

let diff = function( Arr1, delArr ) {
    return Arr1.filter( function(item) {
        let flag = true;
        for( let j = 0; j < delArr.length; j ++ ){
            if(item.privatePoint == delArr[j].privatePoint ){
                flag = false;
                break;
            }
        }
        return flag;
    });
};


let dif = diff(arr, arrDel);

console.log( dif );


var subSet = function(arr1, arr2) {
    var set1 = new Set(arr1);
    var set2 = new Set(arr2);

    var subset = [];

    for (let item of set1) {
        if (!set2.has(item)) {
            subset.push(item);
        }
    }

    return subset;
};

