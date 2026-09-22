function register(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("register here")
        resolve();
    },10000)
})

function login(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
    console.log("login here")
    resolve();
    },5000)
})
function getData(){
    return new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("fetch data from DB")
    resolve();
    
   },4000)
})
function displayData(){
    setTimeout(()=>{
    console.log("view user Data")
    resolve();
    },6000)
}
register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    });
            });
});
register()
.then(login)
.then(getData)
.then(displayData)
.catch((err)=>{
    console.log("Error:",err)
})
console.log("Call Another Application")

