let img = document.querySelector(`.img`)
let container = document.querySelector(`.container`)
const update=require('./master.js')
function phones(phone){
    img.src =phone;
}
function colors(color){
    container.style.background = color;
}
update('ahmed');