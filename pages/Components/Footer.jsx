import React from 'react'
import styles from '../../styles/Footer.module.scss'
import contact from '../../public/data/contact.json'
import SmallCard from './SmallCard';

const Footer = () =>{
    return (
        <div className={styles.container}>
            <div className={styles.aboutUs}>
                <div className={styles.title}>ABOUT US</div>
                <div className={styles.content}>
                    “Trịnh công sơn” là một dự án được thành lập bởi 
                    học sinh sinh viên yêu và cảm nhạc trịnh trên cả 
                    nước với mong muốn đem màu nhạc xưa, những lời ca 
                    nét bút của cố nhạc sĩ hay chỉ đơn giản là những
                     mảnh chuyện nhỏ về cuộc đời ông đến thính/độc giả
                </div>
            </div>
            <div className={styles.contactUs}>
                <div className={styles.title}>CONTACT US</div>
                <div className={styles.contactList}>
                    {
                        contact.map(
                            (contact) => (
                                <SmallCard src = {contact.src} content= {contact.content}/>
                            )
                        )
                    }
                </div>
            </div>

            <div className = {styles.lineContainer}>
                <div class = {styles.line}></div>
            </div>

            <div className = {styles.register}>
                <div>ĐĂNG NHẬP</div>
                <button>ĐĂNG KÍ</button>
            </div>
        </div>
    );
}

export default Footer