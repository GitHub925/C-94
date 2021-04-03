var name
function addUser(){
    name= document.getElementById("username").value
    localStorage.setItem("username", name)
    window.location = "texty_room.html"
}