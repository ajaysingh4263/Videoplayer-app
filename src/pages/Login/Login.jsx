import React, { useState } from "react";
import './Login.css'
import logo from '../../assets/logo.png'
import { Signin , Signup} from "../../firebase";
import netflix_spinner  from '../../assets/netflix_spinner.gif'


function Login(){
       const [signState ,  setsignState] = useState("Sign In")
       const[name , setName]= useState("");
       const[email , setEmail]= useState("")
       const[password , setPassword]= useState("")
       const[loading , setLoading] =useState(false)

       const user_auth = async (event)=>{
        event.preventDefault();
        setLoading(true)
        if(signState==="Sign In"){
              await Signin(email , password);
        } else{
            await Signup(name , email , password);
        }
        setLoading(false)
       }
   
    return (
        loading?<div className="login-spinner">
            <img src={netflix_spinner} alt="" srcset="" />
        </div>:
        <div className="Login">
           <img src={logo} className="login-logo" alt="" />
           <div className="login-form">
            <h1>{signState}</h1>
            <form >
                 {signState === "Sign Up" ?
            <   input value={name} onChange={(e)=>{
               setName(e.target.value) }} type="Name" placeholder="Name"/>:<></>}
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="Email" placeholder="Email"  />
                <input value={password}  onChange={(e)=>{setPassword(e.target.value)}} type="Password" placeholder="Password" />
                <button onClick={user_auth} type="submit">{signState}</button>
                <div className="form-help">
                    <div className="remember">
                        <input type="checkbox"  />
                        <label htmlFor="">Remember Me</label>
                    </div>
                    <p>Need help?</p>
                </div>
            </form>
              <div className="form-switch">
                {signState ==="Sign In"? <p>New to Netflix? <span onClick={()=>{
                    setsignState("Sign Up")}}>Sign Up Now</span></p>:<p>Already have Account? <span onClick={()=>{
                    setsignState("Sign In")}}>Sign In  Now</span></p>}
               
              </div>
           </div>
        </div>
    )
}

export default Login