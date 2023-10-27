import React, { useState } from "react";
import styles from "./UserIcon.module.css";






const UserIcon: React.FC = ()=>{
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(!isButtonClicked)
  }

  return (
    <div className={styles.userDiv}>
        <img src="https://as2.ftcdn.net/v2/jpg/03/69/19/81/1000_F_369198116_K0sFy2gRTo1lmIf5jVGeQmaIEibjC3NN.jpg" alt="" className={styles.userImg}/>
        <button onClick={handleButtonClick}>More</button>
        {isButtonClicked ?
          <ul>
            <li>More</li>
            <li>About</li>
            <li>Settings</li>
          </ul>: null}
    </div>
  );
}

export default UserIcon
