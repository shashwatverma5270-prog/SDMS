function searchStudent(){

let input=document.getElementById("searchInput").value.toUpperCase();

let table=document.getElementById("studentTable");

let tr=table.getElementsByTagName("tr");

for(let i=1;i<tr.length;i++){

let roll=tr[i].getElementsByTagName("td")[0];

let name=tr[i].getElementsByTagName("td")[1];

if(roll&&name){

let txt1=roll.textContent||roll.innerText;

let txt2=name.textContent||name.innerText;

if(txt1.toUpperCase().indexOf(input)>-1||txt2.toUpperCase().indexOf(input)>-1){

tr[i].style.display="";

}else{

tr[i].style.display="none";

}

}

}

}