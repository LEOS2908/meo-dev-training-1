import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {BsSearch} from 'react-icons/bs'
import { useState, useEffect, useRef} from 'react'
import Card from './Components/Card.jsx'
import letter from '../public/data/letter.json'
import music from '../public/data/music.json'
import HorizontalCard from './Components/HorizontalCard'
import cam from '../public/data/cam.json'
import Footer from './Components/Footer.jsx'

export default function Home() {
  const [clicked, setclicked] = useState(0);
  const search = useRef(null);
  const btn = useRef(null);
  useEffect(
    ()=>{
      if(clicked===1){
        search.current.focus();
      }
      else if(clicked===0){
        search.current.blur();
      }
    }, [clicked]
  );
  const [input, setinput] = useState('');
  useEffect(
    ()=>{
      if(input==="")
          btn.current.style.visibility = "hidden";
      else if(input!=="") 
          btn.current.style.visibility = "visible";
    }, [input]
  );

  const[clear, setclear] = useState(0);
  useEffect(
    () => {
      if(clear===1){
        setinput('');
        setclear(clear^1);
      }
    }, [clear]
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>Trinh Cong Son</title>
        <meta name="description" content="trinh cong son" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.searching}>
          <div className={styles.searchbar}>
            <input ref = {search} type="text" id = {styles.search} name = "search" value={input}
              onChange = {
                (e) => {setinput(e.target.value);}
              }
            />
            <div onClick={()=>setclicked(clicked^1)}>
              <button ref = {btn} onClick = {()=>{setclear(clear^1)}}>Clear</button>
              <BsSearch className={styles.icon}/>
            </div>
          </div>
          <div className={styles.name}>
            <div>TRỊNH</div>
            <div>CÔNG</div>
            <div>SƠN</div>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.blackLineContainer}>
            <div className={styles.blackLine}>
            </div>
          </div>
          <div className={styles.list}>
            <div className={styles.heading}>THƯ TÌNH GỬI MỘT NGƯỜI</div>
            <div className={styles.cardList}>
              {
                letter.map(
                  (letter) => (
                    <Card link = {letter.link} src = {letter.src} content = {letter.content}></Card>
                  )
                )
              }
            </div>
          </div>
          <div className={styles.nextArrow}>
            <Image src = "/images/next_arrow.png" layout='fill'/>
          </div>
        </div>

        <div className={styles.cardContainer}>
          <div className={styles.blackLineContainer}>
            <div className={styles.blackLine}>
            </div>
          </div>
          <div className={styles.list}>
              <div className={styles.symbolHeading}>
                <div>
                  <Image src = "/Navigation_image/music.png" alt = "music_symbol" layout="fill" objectFit="scale-down"/>
                </div>
              </div>
            <div className={styles.cardList}>
              {
                music.map(
                  (music) => (
                    <Card link = {music.link} src = {music.src} content = {music.content}></Card>
                  )
                )
              }
            </div>
          </div>
          <div className={styles.nextArrow}>
            <Image src = "/images/next_arrow.png" layout='fill'/>
          </div>
        </div>

        <div className={styles.Container}>
          <div className={styles.part3}>
            <div className={styles.blackLineContainer}>
                <div className={styles.blackLine}>
                </div>
            </div>
            <div className={styles.list}>
                <div className={styles.heading}>CẢM</div>
                <div className={styles.cardList}>
                  <div className={styles.cardContainer1}>
                    <div>
                      <Image src = '/images/cam/picture1.png' layout='fill'/>
                    </div>
                    Nói về: Em và Trịnh
                  </div>
                  <div className={styles.cardContainer2}>
                      <HorizontalCard src = "/images/cam/picture2.png" content = {cam[0].content} title = {cam[0].title}/>
                      <HorizontalCard src = "/images/cam/picture3.png" content = {cam[1].content} title = {cam[1].title} Style = {{"text-align": "center"}}/>
                  </div>
                </div>
            </div>
          </div>
          <div className={styles.Button}>
            <button>XEM THÊM</button>
        </div>
        </div>
        
      <div className={styles.quoteContainer}>
        <div className={styles.quote}>
          <div>
            <Image src = "/images/quote/picture1.png" layout='fill'/>
            <div className={styles.music}><Image src = "/images/quote/picture2.png" layout='fill'/></div>
          </div>
          <div class = {styles.content}>
            Có những ngày tuyệt vọng cùng cực,
              tôi và cuộc đời đã tha thứ cho nhau. Từ buổi con người sống quá rẻ rúng,
              tôi biết rằng vinh quang chỉ là điều dối trá. Tôi không còn gì để chiêm bái
              ngoài nỗi tuyệt vọng và lòng bao dung. Hãy đi đến tận cùng của tuyệt vọng
              để thấy tuyệt vọng cũng đẹp như một bông hoa.
          </div>
        </div>
        <div className={styles.name}>
            <div>CHÂM</div>
            <div>NGÔN</div>
            <div>TRỊNH</div>
          </div>
      </div>

      </main>

    </div>
  )
}