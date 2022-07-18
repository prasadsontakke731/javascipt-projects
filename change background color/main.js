// first get button and container 
let container = document.getElementById("container");
let button = document.getElementById("button");

//color array called
let colors = ['green','yellow','blue','red',"orangr",'pink'];

//eventlistner
 button.addEventListener('click', ()=>{
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    container.style.background = randomColor;
 })