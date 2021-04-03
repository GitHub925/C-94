var room_name


var firebaseConfig = {
    apiKey: "AIzaSyBCejANgJjaQVzcKonEKX3lwX21pkvmRFI",
    authDomain: "textylike-dd992.firebaseapp.com",
    databaseURL: "https://textylike-dd992-default-rtdb.firebaseio.com",
    projectId: "textylike-dd992",
    storageBucket: "textylike-dd992.appspot.com",
    messagingSenderId: "889721995356",
    appId: "1:889721995356:web:81d556cce52cff12662699"
  };



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var username= localStorage.getItem("username")
document.getElementById("namename").innerHTML = "Welcome to TextyLike™, "+username+"!!!";

function addRoom(){
      roomname = document.getElementById("roomid").value;
      firebase.database().ref("/").child(roomname).update({
      purpose: "room name"
      });
      localStorage.setItem("room name", roomname);
      window.location="kwitter_page.html"
}



function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name", name);
      window.location="texty_page.html";
}

function logOut(){
      localStorage.removeItem("username");
      localStorage.removeItem("room name");
      window.location="index.html";
}