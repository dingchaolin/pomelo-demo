/**
 * Created by dcl on 2017/6/28.
 */

const request = require('request');
const md5 = require('./MD5').md5;
const url = "http://127.0.0.1:3000/user/unBindProxy";
let agent = 10001,
    reason = "system_opt",//"extract_desposit"
    msg = "unbind",
    sign = md5(encodeURIComponent( `agent${agent}msg${msg}reason${reason}3v757CqgFzBKKePHqHi`) );
let form = { agent, reason, msg, sign };

let options = {
    method: "POST",
    url: url,
    form:form
};

request( options, (err, res, body) => {
    console.log( "err=====", err, "----body======", body );
} )