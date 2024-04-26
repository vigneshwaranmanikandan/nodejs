function submitHandle(){
    alert("Form submitted!");
}
function submitClick(){
    document.write("submitted!")
}
function nameChange(id){
  var name=document.getElementById(id);
  document.getElementById("Con").innerHTML=name.value
  
}
function nameChange1(id){
    
    document.getElementById("Con").innerHTML=id
    
  }