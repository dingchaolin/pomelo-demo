/**
 * Created by User on 2017/8/8.
 */
/*
let arr = [1,2,3];
let arr1 = arr;
arr = arr.filter( item =>{ return item != 2 } )
console.log( arr );
console.log( arr1 );
*/

function Player(opts) {
    this.name = "";
    this.age = "";
    if( opts ){
        this.name = opts.name;
        this.age = opts.age;
    }
 }

Player.prototype.toJson = function (){
    return {
        name: this.name,
        age: this.age
    }
}

let p1 = new Player( {name:"dcl",age:23});

if( p1.toJson ){
    console.log( p1.toJson() );
}


