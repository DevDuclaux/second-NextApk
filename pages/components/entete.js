import style from '/styles/entete.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Entete(){
    const [lock, setLock] = useState(false)

    return(
        <>
            <div className={`d-flex ${style.head}`}>
                <div className={`d-flex ${style.insigne}`}>
                    <Image src='/assets/logo.png' width={70} height={48.31} className={style.logo}/>
                    <p className={style.name}>Start</p>
                </div>

                <div className={`d-flex ${style.navigation}`}>
                    <ul className={`d-flex ${lock ? style.nav : style.monte}`}>
                        <li><Link href='/' className={style.links}>Home</Link></li>
                        <li><Link href='/portfolio' className={style.links}>Portfolio</Link></li>
                        <li><Link href='/services' className={style.links}>Services</Link></li>
                        <li><Link href='/contacts' className={style.links}>Contact</Link></li>
                    </ul>
                    <div className={style.hamburger} >
                        <div className={lock ? style.croix1 : style.menu1} onClick={() => setLock(!lock)}></div>
                        <div className={lock ? style.go : style.menu2}></div>
                        <div className={lock ? style.croix2 : style.menu3} onClick={() => setLock(!lock)}></div>
                    </div>
                </div>
            </div>
        </>        
    )
}