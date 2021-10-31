const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let sum=0;
const getNumber =()=>{
    readline.question("Number?",number=>{
        if(number==="stop"){
            console.log("the sum of the numbers is "+sum);
            sum=0;
            readline.close();
            return
        }
        sum+=parseInt(number);
        getNumber();
    })
}
getNumber();