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
    
    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML-"Welcome "+user_name+ "!";

    function addRoom(){
          room_name= document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"Adding Chab Room"
          });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
          
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name-" + Room_names);
      row="<div class='room_name' id="+Room_names+ " onClick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logOut(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

