import React, {useState} from "react";
import styles from './Hook.module.css'
function Counter () {
  const [count, setCount]=useState(0);

  const increment = ()=>{
    setCount(count + 1)
  };

  const decrement = ()=>{
    setCount(count - 1)
  };

  return(

    <div className={styles.counerContainer}>
<h2 className={styles.counerHeager}>Лічильник: {count}</h2>
<button className={styles.counerButton} onClick={increment}>+1</button>
<button className={styles.counerButton} onClick={decrement}>-1</button>
    </div>

  )
}
export default Counter
