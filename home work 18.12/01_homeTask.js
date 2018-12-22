function makeAllCaps(arr)
{ 
    return new Promise((resolve, reject) => {
        for(let i=0;i<arr.length;i++)
        {
            try {
                arr[i] = arr[i].toUpperCase()  
            }
            catch(err){
                reject("Error"+' '+ err)
            }
        }
        resolve(arr)
    })
}
function sortWords(arr)
{
    return new Promise((resolve,reject)=>{
        resolve(arr.sort())})
}


arr1=["cCc","bbbb","aaa","Bbbbb"]
arr2=["cCc",99,"aaa","Bbbbb"]
makeAllCaps(arr1).
then((x)=>{
    console.log(arr1)
    sortWords(arr1).then((x)=>{console.log(arr1)})
})
.catch((err)=>{console.log(err)})



makeAllCaps(arr2).
then((x)=>{
    console.log(arr2)
    sortWords(arr2).then((x)=>{console.log(arr2)})
})
.catch((err)=>{console.log(err)})



/* 

____________output__________
arr1=["cCc","bbbb","aaa","Bbbbb"]
[ 'CCC', 'BBBB', 'AAA', 'BBBBB' ]
[ 'AAA', 'BBBB', 'BBBBB', 'CCC' ]
---------------------------------
arr2=["cCc",99,"aaa","Bbbbb"]
Error TypeError: arr[i].toUpperCase is not a function

*/