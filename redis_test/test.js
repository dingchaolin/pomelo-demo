/**
 * Created by dcl on 2017/6/28.
 */
let redis = require("redis"),
    client = redis.createClient();

let key = "dcl";
let value = "123";

let EX = 20;


client.on("error", function (err) {
    console.log("Error " + err);
});


client.set(key, value, "EX", EX, ( err, data )=>{
    console.log( "err=====", err, "----data======", data );
});

value = "234";

client.set(key, value, "EX", EX, ( err, data )=>{
    console.log( "err=====", err, "----data======", data );
});

client.get(key, ( err, data )=>{
    console.log( "err=====", err, "----data======", data );
});


client.quit();