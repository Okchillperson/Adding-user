
var firebaseConfig = {
    apiKey: "AIzaSyBZfmEkwDlwbiZAhM4OJU9fapFEn9-K4vQ",
    authDomain: "kwitter-d5af6.firebaseapp.com",
    databaseURL: "https://kwitter-d5af6-default-rtdb.firebaseio.com",
    projectId: "kwitter-d5af6",
    storageBucket: "kwitter-d5af6.appspot.com",
    messagingSenderId: "478585229181",
    appId: "1:478585229181:web:d2c7baaed8c46a61888614",
    measurementId: "G-NTR3JZSEH0"
  };
  
firebase.initializeApp(firebaseConfig);

function adduser(){
    var user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}