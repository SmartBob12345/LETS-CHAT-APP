const firebaseConfig = {
  apiKey: "AIzaSyBVDIFuc05wwlGARqvs_soObnUBD9YEYAQ",
  authDomain: "lets-chat-appp.firebaseapp.com",
  databaseURL: "https://lets-chat-appp-default-rtdb.firebaseio.com",
  projectId: "lets-chat-appp",
  storageBucket: "lets-chat-appp.appspot.com",
  messagingSenderId: "875064236555",
  appId: "1:875064236555:web:e7effbdaf22ba9ceb0c50e",
  measurementId: "G-M4P3VFHJQH"
};


firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
console.log(username);
document.getElementById("username_label").innerHTML = "Welcome " + username + "!";

function logout(){
  localStorage.removeItem("username");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

function addroom() {
  room_name = document.getElementById("room_name").value;
  console.log(room_name);
  localStorage.setItem("room.name", room_name);
  firebase.database().ref("/").child(room_name).update({
    Roomname: room_name
  });
  window.location = "kwitter_page.html";
}

function redirect_room_name(roomid) {
  localStorage.setItem("room_name", roomid);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log(Room_names);
      roomdiv = "<div id = " + Room_names + "onclick = 'redirect_room_name(this.id)'>" + Room_names + "</div>";
      document.getElementById("output").innerHTML = roomdiv;
    });
  });
}
getData();




