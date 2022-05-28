/**
 * input will a string;
 * split the string
 * iterate in loop to access split string elements
 * assign the whole object ot a new variable
 * use the loop to asscess the key as provides in the input string
 * if a key is not found then immeditely return the undefined and stop checking further
 * 
 */

 var obj = {
    a: {
        b: {
            c: 12,
            j: false
        },
        k: null
    }
};

const findPath = (object, path) => {
    let temp=object;
    let str=path.split('.');
    
    
    
    for(let i=0;i<str.length;i++){
      
             temp=temp[str[i]]
             if(temp===undefined){
                 return undefined
             }

}
    return temp;
};
console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
