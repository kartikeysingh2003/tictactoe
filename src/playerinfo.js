import React from 'react';
import styles from './grid.module.css';

 function Playerinfo(props){
    const element = props.winner ? <h1 className={styles.bottomwinner} >Winner: {props.winner}</h1>: <h2 className={styles.bottom}>Turn: {props.turn}</h2>
    return element;
}

export default Playerinfo;