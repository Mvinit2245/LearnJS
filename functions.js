

//arrow function 
const add = (a,b) => (a+b);
console.log(add(5,3));



//recursive function 

function printN(nums){
    //base case 
    if(nums === 0){
        return;
    }
    console.log(nums)

    //recursive call
    return printN(nums -1)
}   

printN(5)