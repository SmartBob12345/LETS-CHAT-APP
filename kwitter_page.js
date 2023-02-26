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

user_name = localStorage.getitem("username");
room_name = localStorage.getItem("room_name");

function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}    

function send() {
      message = document.getElementById("message").value;
      firebase.database.ref(room_name).push({
            like: 0,
            message: message,
            name: user_name
      });
      document.getElementById("message").innerHTML = "";
}
