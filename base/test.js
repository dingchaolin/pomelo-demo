/**
 * Created by User on 2017/7/24.
 */
let nick = new Buffer("5bCP7aC87byf54yq5LqM5Y+3", 'base64').toString();
console.log( nick );

let base64Decode = require('./utils').base64Decode;

nick = base64Decode("5bCP7aC87byf54yq5LqM5Y+3");
console.log( nick )