import React,{useState} from 'react';
import styles from './index.module.css';
import axios from 'axios';

export default function Index({}) {
  const [userInput,setUserInput]=useState({})
  const [register,setRegister]=useState(false)
  const setInput=(name,value)=>{
     setUserInput((prevValue) => ({
      ...prevValue,
      [name]: value
    }));
  }
  const signup=async()=>{
    try{
      let res=axios.post("https://google-meet-clone-six.vercel.app/api/signup",{
          ...userInput,
        },)
        console.log(res)
    }
    catch(err){

    }
  }
  console.log(userInput,"dasdsd")
  return (
    <div className={styles["modal"]}>
      <div className={styles["container"]}>
         {!register?<>
         <div className={styles["form-container"]}>
        <div className={styles["field"]}>
        <label>Email:</label>
        <input></input>
        </div>
        <div className={styles["field"]}>
        <label>Password</label>
        <input></input>
        </div>
        <div><span>Log in</span></div>
        <div><span
        onClick={()=>setRegister(true)}
        >Sign up</span></div>
         </div>
       
      </>:<>
       <div className={styles["form-container"]}>
      <div className={styles["field"]}>
           <label>Name</label>
           <input
                     value={userInput.name}

           type="text" name="name" onChange={(e)=>{
            setInput(e.target.name,e.target.value)
           }}></input>
       </div>
       <div className={styles["field"]}>
          <label>Email</label>
          <input type="text" name="email" 
          value={userInput.email}
          onChange={(e)=>{
            setInput(e.target.name,e.target.value)
           }} ></input>
       </div>
       <div className={styles["field"]}>
        <label>Password</label>
        <input
          value={userInput.password}
        
        type="password" name="password" onChange={(e)=>{
            setInput(e.target.name,e.target.value)
           }}></input>
       </div>
       <div><span
       onClick={()=>{signup()}}
       >Register</span></div>
        <div><span
        onClick={()=>setRegister(false)}
        >Log in</span></div>
       </div>
      </>}

      
      </div>
    </div>
  )
}
