import React from 'react';
import loadingGif from "./gifs/6ob.gif"
import styles from './grid.module.css';
function Image(props){
     if(props.winner){
    return(  <img className={styles.image} src={loadingGif} alt="wait until the page loads" />)}
    else return null;

}
export default Image;