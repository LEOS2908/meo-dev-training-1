import React from "react";
import Image from "next/image";
import styles from "../../styles/NavigationBar.module.scss"

const NavigationBar = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <div>
                    <Image src = "/Navigation_image/music.png" alt = "music_symbol" layout="fill" objectFit="scale-down"/>
                </div>
            </div>
            <div className={styles.page}>
                <ul >
                    <li>TIỂU SỬ</li>
                    <li>MỤC LỤC</li>
                    <li>TÌM KIẾM</li>
                    <li>LIÊN HỆ</li>
                </ul>
            </div>
            <div className={styles.user}>
                <ul>
                    <li>ĐĂNG NHẬP</li>
                    <li className={styles.register}>ĐĂNG KÝ</li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationBar;