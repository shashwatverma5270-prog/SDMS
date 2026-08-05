function updateStudent(){

let roll=document.getElementById("roll").value;
let name=document.getElementById("name").value;

if(roll==="" || name===""){
alert("Please fill Roll Number and Student Name.");
return;
}

alert("Student details updated successfully!");
}

function deleteStudent(){

let roll=document.getElementById("roll").value;

if(roll===""){
alert("Enter Roll Number first.");
return;
}

let confirmDelete=confirm("Are you sure you want to delete this student?");

if(confirmDelete){
alert("Student deleted successfully!");

document.getElementById("updateForm").reset();
}

}