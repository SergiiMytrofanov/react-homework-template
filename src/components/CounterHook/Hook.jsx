import React, {useState} from "react";
import styles from './Hook.module.css'
function Counter () {
  const [count, setCount]=useState(0);

  return(

    <div className={styles.counerContainer}>
<h2 className={styles.counerHeager}>Лічильник: {count}</h2>
<button className={styles.counerButton} onClick={() => setCount(count + 1)}>+1</button>
<button className={styles.counerButton} onClick={() => setCount(count - 1)}>-1</button>
    </div>

  )
}
export default Counter
