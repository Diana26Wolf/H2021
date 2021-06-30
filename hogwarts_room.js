var firebaseConfig = {
      apiKey: "AIzaSyBafofy70HKyT0Fca0wli_6C2jirmPzUCI",
      authDomain: "hogwarts-2021-2f41a.firebaseapp.com",
      databaseURL: "https://hogwarts-2021-2f41a-default-rtdb.firebaseio.com",
      projectId: "hogwarts-2021-2f41a",
      storageBucket: "hogwarts-2021-2f41a.appspot.com",
      messagingSenderId: "654284456594",
      appId: "1:654284456594:web:d8106e50c5fef353e25c4b",
      measurementId: "G-C38ZCX4HR5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

username = localStorage.getItem("User_Name")
document.getElementById("username").innerHTML = "Welcome " + username + "!"

function Add() {
      roomname = document.getElementById("room").value
      firebase.database().ref("/").child(roomname).update({
            Malfoy05: "Yo",
            Blaise22: "Hey"
      })
      localStorage.setItem("rn", roomname)
      window.location = "hogwarts_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();