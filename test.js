import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
  //  import { getDatabase, ref, get} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDhGyPoFZmCeZ4XcUg4tvP6f5DAjlbD0DM",
        authDomain: "first-simtask.firebaseapp.com",
        databaseURL: "https://first-simtask-default-rtdb.firebaseio.com",
        projectId: "first-simtask",
        storageBucket: "first-simtask.appspot.com",
        messagingSenderId: "713152217463",
        appId: "1:713152217463:web:125e9426f4f18da717e172",
        measurementId: "G-85JWP34CHX"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    // const login = document.getElementById("btnLogin");

function Login() {
    var email= document.getElementById('Email').value;
    var Pass= document.getElementById('Pass').value;

  //  var db_ref=ref(database, "users/" + user.uid);
   // var user_data= get(db_ref);
    signInWithEmailAndPassword(auth, email, Pass)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        alert('User Logged In!!')
        window.location.replace("page.html");
        console.log(user);
        //document.getElementById("p").innerHTML= "Welcome" + user_data.Username;
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorCode+ ":" +errorMessage)
    });
}


// btnCreate.addEventListener('click', (e)=>{
//     var name= document.getElementById('Name').value;
//     var dob= document.getElementById('DOB').value;
//     var gender= document.getElementById('Gender').value;
//     var email= document.getElementById('Email').value;
//     var Uname= document.getElementById('Uname').value;
//     var Pass= document.getElementById('Pass').value;

//     createUserWithEmailAndPassword(auth, email, Pass)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         var database_ref=ref(database, "users/" + user.uid);
        
//         var user_data={
//             email: email,
//             name: name,
//             dob: dob,
//             gender: gender,
//             Username: Uname
//         }

//         set(database_ref, user_data);
//         // ...
//         alert('Account Created!!')
//         window.location.replace("page.html");
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//         alert(errorCode+ ":" +errorMessage)
//     });
// })