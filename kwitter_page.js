var firebaseConfig = {
    apiKey: "AIzaSyDpBlY5gdz2hlnUN5KC85q-vmeBGqmzZmU",
    authDomain: "chabber-db19f.firebaseapp.com",
    databaseURL: "https://chabber-db19f-default-rtdb.firebaseio.com/",
    projectId: "chabber-db19f",
    storageBucket: "chabber-db19f.appspot.com",
    messagingSenderId: "821557856500",
    appId: "1:821557856500:web:34880098e91bee2c9976a1"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
    function send(){
var message= document.getElementById("mes").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:message,
      like:0
});
document.getElementById("mes").value="";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
console.log(firebase_message_id);
console.log(message_data);
var message=message_data['message'];
var name=message_data['name'];
var like=message_data['like'];
nameWithTag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
messageWithTag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-info' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span="<span class='glyphicon glyphicon-thumbs-up'>Like : "+like+"</span></button><hr>";
row=nameWithTag+messageWithTag+like_button+span;
document.getElementById("output").innerHTML+=row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updatedLikes=Number(likes)+1;
    console.log(updatedLikes);
    firebase.database().ref(room_name).child(message_id).update({
        like:updatedLikes
    });


}
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
