const bar=document.getElementById("barChart");

new Chart(bar,{
type:"bar",
data:{
labels:["Jan","Feb","Mar","Apr","May","Jun"],
datasets:[{
label:"Students",
data:[45,60,75,50,90,80],
backgroundColor:[
"#3b82f6",
"#22c55e",
"#f59e0b",
"#ec4899",
"#8b5cf6",
"#06b6d4"
],
borderRadius:8
}]
},
options:{
responsive:true,
plugins:{
legend:{
display:false
}
}
}
});

const pie=document.getElementById("pieChart");

new Chart(pie,{
type:"doughnut",
data:{
labels:["Male","Female"],
datasets:[{
data:[5,2],
backgroundColor:[
"#3b82f6",
"#ec4899"
]
}]
},
options:{
responsive:true,
cutout:"65%"
}
});