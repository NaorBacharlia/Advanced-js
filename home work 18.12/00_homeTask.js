function testNum(x)
{
    return new Promise((resolve, reject) => {
        if(isNaN(x))
            reject("Its not a number")
        else if (x>10)
            resolve("The number is bigger")
        else if(x==10)
            resolve("The number is equal to 10")
        else
            resolve("The number is smaller") });
}
testNum(10).
    then((x)=>{console.log(x)})
    .catch((y)=>{console.log(y)})

/* 

____________output__________
x<10
The number is smaller

x>10
The number is bigger

x==10
The number is equal to 10

x is Nan
Its not a number

*/
