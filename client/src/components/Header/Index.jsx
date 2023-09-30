import React,{useEffect,useState} from 'react'
import styles from './index.module.css'
import MainImage from '../../assets/meetmain.png'
import Login from '../Login'
let logggedin=false
export default function Index() {
const [currentTime, setCurrentTime] = useState(getCurrentTime());
const [loginOpen, setLoginOpen] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12 || 12;

    // Add leading zeros to single-digit minutes
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Create the formatted time string
    return `${hours}:${minutes} ${ampm}`;
  }
function getCurrentDate() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const now = new Date();
    const dayOfWeek = daysOfWeek[now.getDay()];
    const month = months[now.getMonth()];
    const dayOfMonth = now.getDate();

    // Create the formatted date string
    const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;

    return formattedDate;
}

  return (
    <div className={styles["header-container"]}>
        <div className={styles["header-container__logo"]}>
            <img src={MainImage}/>
            <span>Meet</span>
        </div>
        <div className={styles["header-container__other-deatils"]}>
          <span className={styles["header-container__other-deatils__dates"]}>
            <span>{currentTime}</span>
            <span> • </span>
            <span>{getCurrentDate()}</span>
          </span>
          <span className={styles["header-container__other-deatils__support"]}>i</span>
          <span className={styles["header-container__other-deatils__report"]}>i</span>
          <span className={styles["header-container__other-deatils__setting"]}>i</span>
          {logggedin?
           <span className={styles["user"]}><span>V</span></span>
          :
          
           <div className={styles["button"]}
           onClick={()=>setLoginOpen(true)}
           ><span>Login</span></div>
          }
        </div>
        <Login
        open={loginOpen}
        />
    </div>
  )
}
