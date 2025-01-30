var overlay1=document.querySelector(".overlay")
var forms=document.querySelector(".form-1")

var plusbutton=document.getElementById("plus")
plusbutton.addEventListener("click",function(event){
    event.preventDefault()
overlay1.style.display="block";
forms.style.display="block";


})
var cancel1=document.getElementById("Cancel2")
cancel1.addEventListener("click",function(event){
    event.preventDefault()
overlay1.style.display="none";
forms.style.display="none";


})
var container1=document.querySelector(".container")
var add1=document.getElementById("Add")
var name1=document.getElementById("name")
var img1=document.getElementById("img")
var des=document.getElementById("description")
add1.addEventListener("click", function(){
    var div1=document.createElement("div")
    div1.setAttribute("class","card  mt-5 w-15rem")
    div1.innerHTML=`<img src="${img1.value}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title" style="color:rgb(51, 22, 27);">${name1.value}</h5>
              <p class="card-text">${des.value}</p>
              <a href="#" class="btn btn-primary" style="background-color: rgb(51, 22, 27); border: none;" onclick="delete2(this)">delete</a>
            </div>`
          container1.appendChild(div1)
          name1.value="";
          name1.focus()
          img1.value="";
          img1.focus()
          des.value="";
          des.focus()

          overlay1.style.display="none";
          forms.style.display="none";
})
var card1=document.querySelector(".card")
function delete1(){
    card1.innerHTML="";
    card1.style.display="none"
}
function delete2(Element){
    Element.parentElement.parentElement.remove()
}




