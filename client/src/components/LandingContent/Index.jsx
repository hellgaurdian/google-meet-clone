import React,{useState} from 'react';
import styles from './index.module.css';


export default function Index() {
    const [meetingLink,setMeetingLink]=useState("")
  return (
    <div className={styles["landing-content"]}>
      <div className={styles["actions"]}>
        <div className={styles["actions-container"]}>
            <div className={styles["button"]}>
                <span>Start Meeting</span>
            </div>
             <div className={styles["input"]}>
             <input type="text" value={meetingLink}
             onChange={(e)=>setMeetingLink(e.target.value)}
             placeholder='Enter Meeting Link'
             ></input>
             <span
             style={{
                color:`${meetingLink.length>0?"#1a73e8":"rgba(60,64,67,.38)"}`
             }}
             >Join</span>
            </div>
        </div>
      </div>
      <div className={styles["description"]}></div>
    </div>
  )
}
