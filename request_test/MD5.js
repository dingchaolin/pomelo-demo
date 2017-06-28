/**
 * Created by dcl on 2017/6/27.
 */
var crypto = require('crypto');
/**
 *@param   str 字符串
 @param   key 秘钥
 */
function md5( str ){
    let decipher = crypto.createHash( 'md5' );
    return decipher.update( str ).digest('hex');
}

exports.md5 = md5;
