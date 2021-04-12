
var firebaseConfig = {
    apiKey: "AIzaSyBCejANgJjaQVzcKonEKX3lwX21pkvmRFI",
    authDomain: "textylike-dd992.firebaseapp.com",
    databaseURL: "https://textylike-dd992-default-rtdb.firebaseio.com",
    projectId: "textylike-dd992",
    storageBucket: "textylike-dd992.appspot.com",
    messagingSenderId: "889721995356",
    appId: "1:889721995356:web:81d556cce52cff12662699"
  };
    firebase.initializeApp(firebaseConfig);


var nametag;
var msgtag;
var liketag;
var username= localStorage.getItem("username");
var roomname=localStorage.getItem("room name");
var msg
var like;
var likes;
var message;
var name;
var row;
var button_id;
var updated_like;
var hearts;
var lovetag;
var button_id_love;
var likey;
var updated_likes;
var heartid
function getData() { firebase.database().ref(roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
hearts=message_data['heart'];
heartid=firebase_message_id+"hearts"
nametag="<div style='margin-top:30px; margin-bottom:30px;'<h3 id='name'>"+name+"<img src='tick.png' class='user_tick'></h4><br>";
msgtag="<h4 class='message_h4'>"+message+"</h4><br>";
liketag="<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'> <span class='glyphicon glyphicon-heart' style='margin-left: 10px;'>Hearts: "+like+"</span></button><hr></div>";
row=nametag+msgtag+liketag;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }

function updateLike(message_id){
      console.log("Somebody liked: "+message_id);
      button_id = message_id;
      likes=document.getElementById(button_id).value;
      updated_like=Number(likes)+1;
      console.log("Likes:"+updated_like);

      firebase.database().ref(roomname).child(message_id).update({
            like: updated_like
      })
}
function updateLove(message_id){
      console.log("Somebody loved: "+message_id);
      button_id_love = message_id;
      likey=document.getElementById(button_id_love).value;
      updated_likes=Number(likey)+1;
      console.log("Likes:"+updated_likes);

      firebase.database().ref(roomname).child(message_id).update({
            like: updated_likes
      })
}
getData();

function send(){
     msg =document.getElementById("msg").value
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0,
            heart: 0
      });
      document.getElementById("msg").value=""
}

function logOut(){
      localStorage.removeItem("username");
      localStorage.removeItem("room name");
      window.location="index.html";
}

