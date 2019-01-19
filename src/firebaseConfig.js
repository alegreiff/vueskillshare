import Firebase from 'firebase'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDi0eACBnmfEM5wLoEsab0BRx8WDa4Nj-4",
    authDomain: "pizzademo-c4d1e.firebaseapp.com",
    databaseURL: "https://pizzademo-c4d1e.firebaseio.com",
    projectId: "pizzademo-c4d1e",
    storageBucket: "",
    messagingSenderId: "234910841471"
  };
  const firebaseApp = Firebase.initializeApp(config);
  const db = firebaseApp.database()
  export const dbMenuRef = db.ref('menu')
  export const dbOrdersRef = db.ref('orders')
