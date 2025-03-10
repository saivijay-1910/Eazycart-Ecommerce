var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")

var sendbutton = document.getElementById("send")
sendbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var closebutton = document.getElementById("close")
function closepopup(){
    popupoverlay.style.display="none"
    popupbox.style.display="none"
}

var sidenav = document.querySelector(".side-navbar")
function shownavbar(){
    sidenav.style.left="0"
}
function closenavbar(){
    sidenav.style.left="-60%"
}
