var oh =document.getElementById("canvaso")
var xdd=oh.getContext("2d")
var rover_arriba = 100
var rover_lado = 100
var perseverance_save = "index.png"
var mars_save = "mars.jpg"
var x = 10
var y = 10
var marss
function xd() {
    imagenper = new Image()
    imagenper.onload = persever;
    imagenper.src=perseverance_save;
    marss = new Image()
    marss.onload = mars;
    marss.src=mars_save;
}
function persever() {
    xdd.drawImage(imagenper,x,y,rover_lado,rover_arriba)
}
function mars() {
    xdd.drawImage(marss,0,0,oh.width,oh.height)
}
window.addEventListener("keydown",codedetecla)
function codedetecla(e) {
    save = e.keyCode
    console.log (save)
    if (save == 40){
        down()
    }
    if (save == 39){
        right()
    }
    if (save == 38){
        up()
    }
    if (save == 37){
        left()
    }
}
function down() {
    if ( y < 400 ) {
        y += 10
        mars()
        persever()
    }
}
function up() {
    if ( y > 10 ) {
        y -= 10
        mars()
        persever()
    }
}
function left() {
    if ( x > 10 ) {
        x -= 10
        mars()
        persever()
    }
}
function right() {
    if ( x < 700 ) {
        x += 10
        mars()
        persever()
    }
}
    