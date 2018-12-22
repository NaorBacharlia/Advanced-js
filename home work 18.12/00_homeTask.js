function testNum(x)
{
    return new Promise((resolve, reject) => {
        if(isNaN(x))
            reject("Its not a number")
        else if (x>10)
            resolve("The number is bigger")
        else
            resolve("The number is smaller") });
}
testNum(15).
    then((x)=>{console.log(x)})
    .catch((y)=>{console.log(y)})

/* 

____________output__________
x<10
The number is smaller

x>10
The number is bigger

x is Nan
Its not a number

*/