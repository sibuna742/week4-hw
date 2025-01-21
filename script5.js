let fname = document.getElementById("name");
let pwd = document.getElementById("pswd");
let p = document.createElement("p");
let edt = document.getElementById("edit");
var ul = document.getElementById("list");
const sbmtbutton = document.getElementById("submit");

sbmtbutton.addEventListener("click", function (event) {
    event.preventDefault();
    let x = fname.value;
    let y = pwd.value;

    if (x !== null && y !== null) {
        alert("username and password submitted successfully");
        document.getElementById("name").value = " ";
        document.getElementById("pswd").value = " ";
    location.reload();
    }
});
// function addItem(){
// 	var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");
//   var li = document.createElement("li");
//   li.setAttribute('id',candidate.value);
//   li.appendChild(document.createTextNode(candidate.value));
//   ul.appendChild(li);
// }

// function removeItem(){
// 	var ul = document.getElementById("dynamic-list");
//   var candidate = document.getElementById("candidate");
//   var item = document.getElementById(candidate.value);
//   ul.removeChild(item);
// }
