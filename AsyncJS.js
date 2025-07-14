// let promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         success = false;
//         if(success == true){
//             resolve("Success");
//         } else{
//             reject("Rejected");
//         }
//     } , 10);
// });

// promise.then(console.log).catch(console.error);



const college={
    name : "Adypsoe",
    year : 2008,
    department : "Computer"
}

const jsonString = JSON.stringify(college);

console.log(jsonString);