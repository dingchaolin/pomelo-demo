/**
 * Created by dcl on 2017/6/28.
 */

let arr = [1,2,3];
for( let i in arr ){
    console.log( arr[i])
}

/*
 1.不要用for in遍历数组，全部统一采用标准的for循环变量数组(我们无法保证我们引入的js是否会采用prototype扩展原生的Array)
 2.如果要对js的原生类扩展的时候，不要采用prototype了
 */