const sum=arr=>{
    return arr.reduce((prev,next)=>prev+next);
}
const multiply=arr=>{
    return arr.reduce((prev,next)=>prev*next);
}

const reverse=str=>{
    return str.split("").reverse().join("");
}
const findLongestWords=(arr,i)=>{
    return arr.filter(value=>value.length>i);
}
