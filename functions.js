

//arrow function 
const add = (a, b) => (a + b);
console.log(add(5, 3));



//recursive function 

function printN(nums) {
    //base case 
    if (nums === 0) {
        return;
    }
    console.log(nums)

    //recursive call
    return printN(nums - 1)
}

printN(5)




function factNum(num) {
    //base case
    if (num === 0 || num === 1) {
        return 1;
    }
    //recursive call
    return num * factNum(num - 1)
}
const res = factNum(4);
console.log(res)
// console.log(factNum(5)); another way 