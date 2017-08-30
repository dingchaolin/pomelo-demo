/**
 * Created by User on 2017/8/30.
 */

let indexOf = function ( ori, sub ){

    if( ori.length < sub.length ){
        return -1;
    }
    //js 数组越界返回undefined
    for( let i = 0; i < ori.length; i++ ){
        for( let j = 0; j < sub.length; j ++ ){

            if( ori[i+j] == sub[j] ){
                if( j == sub.length - 1 ){
                    return i;
                }
            }else{
                break;
            }
        }
    }
    return -1;
}

console.log( indexOf( "123", "23"))

