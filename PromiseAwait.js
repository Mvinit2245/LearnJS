console.log("This is the Program of Async Function and Await operator");

async function fetchData() {

    let res = await new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let placement = true;
            if(placement){
                resolve("You got 30 LPA !");
            }else{
                reject("You not Selected for any Placement , Please try agian 1");
            }
        },1000)
    })

    console.log(res);
    
}
console.log("You are Waiting for Placement Result ")
fetchData().catch(console.error);
