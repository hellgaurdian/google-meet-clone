import React,{useState} from 'react';
import styles from './index.module.css';


export default function Index() {
  const [userInput,setUserInput]=useState({})
  const [register,setRegister]=useState(false)
  return (
    <div className={styles["modal"]}>
      {!register?<>
       <div className={styles["email"]}>
        <label>Email</label>
       </div>
       <div className={styles["password"]}>
        <label>Password</label>
       </div>
       
      </>:<>
      <div className={styles["name"]}>
           <label>Name</label>
       </div>
       <div className={styles["email"]}>
          <label>Email</label>
       </div>
       <div className={styles["password"]}>
        <label>Password</label>
       </div>
      </>}
    </div>
  )
}
