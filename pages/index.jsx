import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import {BsSearch} from 'react-icons/bs'
import { useState, useEffect, useRef} from 'react'

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
      <main className={styles.mainbody}>
        <div className={styles.searchbar}>
          <input ref = {search} type="text" id = {styles.search} name = "search" value={input} 
            onChange = {
              (e) => {setinput(e.target.value);}
            }
          />
          <div id = "searching" onClick={()=>setclicked(clicked^1)}>
            <button ref = {btn} onClick = {()=>{setclear(clear^1)}}>Clear</button>
            <BsSearch/>
          </div>
        </div>
        <div className={styles.name}>
          <div>TRỊNH</div>
          <div>CÔNG</div>
          <div>SƠN</div>
        </div>
      </main>
    </div>
  )
}