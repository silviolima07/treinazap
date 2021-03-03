import firebase from 'firebase';	

const firebaseConfig = {	
   apiKey: "AIzaSyBuHY-6Qmt0u7kCQVkFnr2f85T9e9VYzds",
    authDomain: "treinazap-silvio.firebaseapp.com",
    projectId: "treinazap-silvio",
    storageBucket: "treinazap-silvio.appspot.com",
    messagingSenderId: "255612296199",
    appId: "1:255612296199:web:f2e10d62b37434594cdea2"
};	

const firebaseApp = firebase.initializeApp(firebaseConfig);	

const db = firebaseApp.firestore();	
const auth = firebase.auth();	
const provider = new firebase.auth.GoogleAuthProvider();	
const storage = firebase.storage();

export { auth, provider, storage, firebase };	
export default db;  
