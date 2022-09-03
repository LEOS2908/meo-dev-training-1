import React from 'react'
import Image from 'next/image';
import style from '../../styles/Card.module.scss';
import Link from 'next/link'

const ListofCards = (props) =>{
    return(
        <div className={style.card}>
            <Link href = {`/${props.link}`}>
                <a>
                    <div>
                        <Image src = {props.src} layout = "fill" />
                    </div>
                    {props.content}
                </a>
            </Link>
        </div>
    );
}

export default ListofCards;