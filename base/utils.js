/**
 * Created by User on 2017/7/24.
 */
const base64 = require('./jbase64');
exports.base64Decode = function(nickname){
    var base = BASE64.decoder(nickname);
    var str = '';
    for(var i = 0 , len =  base.length ; i < len ;++i){
        str += String.fromCharCode(base[i]);
    }
    return str;
}
