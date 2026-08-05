function saveSettings(){

let password=document.getElementById("password").value;
let confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("Passwords do not match!");

return;

}

alert("Settings Saved Successfully!");

}