/**
 * Created by User on 2017/8/9.
 */

let obj = {
    a: [1, 2, 3, 4],
    b: true
};

let a = obj.a;

obj.a = obj.a.filter(function (item) {
    return item != 2;
});

//console.log( obj.a );
//console.log( a );


let objArr = {a:[{val:2},{val:3},{val:4},{val:1}]};
let bb = objArr.a;

for( let i = 0; i<bb.length; i ++ ){
    console.log(bb[i]);
    //if( i == 2){
    //    objArr.a.splice(i--,1);
    //}
    objArr.a = objArr.a.filter(function (item) {
        return item.val != 2;
    });
}

console.log( bb, objArr.a )