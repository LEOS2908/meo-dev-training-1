import React from 'react'
import Image from 'next/image';
import styles from '../../styles/HorizontalCard.module.scss'

const HorizontalCard = (props) =>{
    return (
        <div className={styles.container}>
            <div>
                <Image src = {props.src} layout = "fill"/>
            </div>
            <div className={styles.text}>
                <p className={styles.title} style = {props.Style}>{props.title}</p>
                <br/>
                <p>{props.content}</p>
            </div>
        </div>
    );
}

export default  HorizontalCard;