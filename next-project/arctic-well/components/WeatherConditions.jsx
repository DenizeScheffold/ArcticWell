import React from 'react';
import styles from "../styles/Weather.module.css";

const Conditions = (props) => {
   return (
    <div className={styles.Wrapper}>
             {props.loading && <div className={styles.Loader} />}
           {props.responseObj.cod === 200 ?
               <div>
                   <p><strong>{props.responseObj.name}</strong></p>
                   <p>It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.</p>
               </div>
           : null
           }
       </div>
   )
}

export default Conditions;