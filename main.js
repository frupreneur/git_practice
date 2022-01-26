
//function that returns the elements of an array and its index in a object
function main(arr,y){
    let obj = {}
    arr.forEach((x,i)=>{
      obj[`${x}`] = i
    });

    return obj
}

const nums = [1,2,3,4,5];


console.log(main(nums))