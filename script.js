let a;
function findImg(name){
    console.log(name);
    localStorage.setItem("someVarKey", name); ;
     
}


function show(){
    //console.log(a);
    document.getElementById("heading").innerHTML =localStorage.getItem("someVarKey");
 //   $("#imageShow").attr("src", );
    document.getElementById("imageShow").src=  "images/"+localStorage.getItem("someVarKey")+'.png'
}