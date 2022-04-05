const firebaseConfig = {
      apiKey: "AIzaSyBzs8z6y3Ce4yv7sZgKLUOrlvnBGXB6cEg",
      authDomain: "kwiter-f54d9.firebaseapp.com",
      databaseURL: "https://kwiter-f54d9-default-rtdb.firebaseio.com",
      projectId: "kwiter-f54d9",
      storageBucket: "kwiter-f54d9.appspot.com",
      messagingSenderId: "855393100227",
      appId: "1:855393100227:web:24c3bdc52f7bf011d75d76",
      measurementId: "G-QP96HCZVDP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom() {
      room_name = document.getElementById("room_name").value; firebase.database().ref("/").child(room_name).update({ purpose: "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
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