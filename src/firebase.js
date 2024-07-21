
import { initializeApp } from "firebase/app";
import {  createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {  addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCzeLjeQdClsRHy8fcf2FoJCLp-iLxm3vg",
  authDomain: "netflix-clone-a62b5.firebaseapp.com",
  projectId: "netflix-clone-a62b5",
  storageBucket: "netflix-clone-a62b5.appspot.com",
  messagingSenderId: "1027764452061",
  appId: "1:1027764452061:web:bd660e9283744687a7f934",
  measurementId: "G-YL1HWXS627"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  //authentication
const db = getFirestore(app);  //database


//functions 
const Signup =async (name ,email ,password)=>{
         try {
             const res = await createUserWithEmailAndPassword(auth ,email,password);
             const user = res.user;
              await addDoc(collection(db , 'user'),{
                uid : user.uid,
                name,
                authprovider: "local",
                email,

              })
         } catch (error) {
            console.log(error);
            toast.error(error.code.split('/')[1].split('-').join(" "))
         }
}

const Signin = async(email , password )=>{
        try {
            await signInWithEmailAndPassword(auth ,email ,password)
        } catch (error) {
            console.log(error);
           toast.error(error.code.split('/')[1].split('-').join(" "))
        }
}


const signout = ()=>{
    signOut(auth)
}

export {db,auth, Signup,Signin,signout};