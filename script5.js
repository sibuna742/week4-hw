let fname=document.getElementById("name");
let pwd=document.getElementById("pswd");
let p=document.createElement("p");
let edt=document.getElementById("edit");
const sbmtbutton=document.getElementById("submit");

sbmtbutton.addEventListener("click",function(event){
    event.preventDefault();
    let x=fname.value;
    // console.log(x)
    let y=pwd.value;
// console.log(y)
    if(x && y){
       x.value=" ";
       console.log(x)
       y.value=" ";
       console.log(y)
       alert("username and password successfully submited")
       
    }
    else{
        alert("please enter a valid username or password")
    }
   
})