/**
 * Created by User on 2017/7/11.
 */
//
//function Human( opts ){
//    this.name = opts.name;
//    this.age  = opts.age;
//    this.sal = opts.sal;
//}
//
//Human.prototype.getAge = function(){
//    return this.age;
//}
//
//
//let h1 = new Human( {name:"dcl", age:12, sal:1200} );
//
//let h2 = new Human( );
//
////h2.age = 15;
//
//console.log( h2 );

let toObject = function ( obj ) {
    var new_obj = {};
    for (var name in obj) {
        if (typeof obj[name] != 'function') {
            new_obj[name] = obj[name]
        }
    }
    return new_obj
};

function BaoChange(opts){
    this.canChangeBao = false;
    this.oldBaoCard = [];
    this.newBaoCard = [];

}

let bao = new BaoChange();

console.log( bao );

bao.oldBaoCard.push(1);
bao.newBaoCard.push(2);
console.log( bao );

console.log( toObject(bao) )


let arr = [{a:1,b:2},{a:3,b:4}];
let arrTemp = arr;
for( let i = 0; i < arrTemp.length; i ++ ){
    arrTemp[i].a = 555;
}

console.log( arr );


for( let i = 0; i < 5; i ++ ){
    let j = 6;
    for( j = 6; j < 10; j ++ ){
        console.log( `i===${i},j====${j}`);
        if( (i == 2) && (j == 8) ){
            console.log("到底了。。。。")
            break;
        }
    }

    console.log("==========================================")
}


