import React from 'react';
import styles from '../styles/DiemXua.module.scss'
import Image from 'next/image';
import Head from 'next/dist/shared/lib/head';

const diemxua = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Trinh Cong Son</title>
                <meta name="description" content="trinh cong son" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.title}>
                <div className = {styles.container1}>
                    <Image src = "/images/diemxua/music.png" layout = "fill"/>
                </div>
                <div className={styles.container2}>DIỄM XƯA - MỐI TÌNH ĐẦU DAY DỨT CỦA TRỊNH CÔNG SƠN</div>
            </div>

            <div className={styles.content}>
                <div className={styles.part1}>
                    <div className={styles.heading}>Lời Bài Hát</div>
                    Mưa vẫn mưa bay trên tầng tháp cổ
                    <br />
                    Dài tay em mấy thuở mắt xanh xao
                    <br />
                    Nghe lá thu mưa reo mòn gót nhỏ
                    <br />
                    Đường dài hun hút cho mắt thêm sâu
                    <br />
                    <br />
                    Mưa vẫn hay mưa trên hàng lá nhỏ
                    <br />
                    Buổi chiều ngồi ngóng những chuyến mưa qua
                    <br />
                    Trên bước chân em âm thầm lá đổ
                    <br />
                    Chợt hồn xanh buốt cho mình xót xa
                    <br />
                    <br />
                    Chiều nay còn mưa sao em không lại
                    <br />
                    Nhớ mãi trong cơn đau vùi
                    <br />
                    Làm sao có nhau, hằn lên nỗi đau
                    <br />
                    Bước chân em xin về mau
                </div>
                <div className={styles.part2}>
                    <div className={styles.emptyHeading}></div>
                    Mưa vẫn hay mưa cho đời biến động 
                    <br />
                    Làm sao em nhớ những vết chim di 
                    <br />
                    Xin hãy cho mưa qua miền đất rộng 
                    <br />
                    Để người phiêu lãng quên mình lãng du 
                    <br />
                    <br />
                    Chiều nay còn mưa sao em không lại 
                    <br />
                    Nhớ mãi trong cơn đau vùi 
                    <br />
                    Làm sao có nhau, hằn lên nỗi đau 
                    <br />
                    Bước chân em xin về mau 
                    <br /> <br />
                    Mưa vẫn hay mưa cho đời biến động 
                    <br />
                    Làm sao em biết bia đá không đau
                    <br />
                    Xin hãy cho mưa qua miền đất rộng 
                    <br />
                    Ngày sau sỏi đá cũng cần có nhau
                </div>
                <div className={styles.part3}>
                    <div className={styles.picture1}><Image src = "/images/diemxua/diemxua.png" layout='fill'/></div>
                    <div className={styles.picture2}><Image src = "/images/diemxua/book.png" layout = "fill" /></div>
                </div>
            </div>

            <div className={styles.lowerContent}>
                <div className={styles.verticalWord}>Ngô Vũ Bích Diễm - Thời Sinh Viên</div>
                <div className={styles.image}>
                    <div>
                        <Image src = "/images/diemxua/diem.png" layout='fill'/>
                    </div>
                </div>
                <div className={styles.bottomContent}>
                    <div className={styles.title}>
                        Ý Nghĩa Ca Khúc
                    </div>
                    <div className={styles.text}>
                        Được sáng tác vào năm 1960, "Diễm xưa" được coi 
                        là một trong những ca khúc đầu tay trong sự nghiệp 
                        nhạc tình của nhạc sĩ Trịnh Công Sơn. Bài hát chất 
                        chứa một nỗi niềm rất thật của người nghệ sĩ, vừa 
                        tiếc nuối vừa trách móc, ưu thương. Với những người 
                        mộ điệu, họ cảm nhận được trong "Diễm xưa" hình ảnh 
                        một chàng trai đang mòn mỏi ngóng chờ những bước chân 
                        âm thầm của một cô gái "chiều nay còn mưa sao em không 
                        lại”. Trách móc đấy nhưng vẫn trông ngóng mãi một bóng hình
                    </div>
                </div>
            </div>
        </div>
    );
}
export default diemxua; 