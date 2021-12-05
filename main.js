// let clicker = document.getElementById("clicka").addEventListener("click", remove());


function create (){
let image = document.createElement("img");
image.setAttribute("class","link");
let container = document.getElementById("subContainer");
// let source = image.src("one.jpg");
image.src= "Welcome.jpg";
container.appendChild(image);
};

function clear (){
    document.querySelectorAll(".link").remove();
}