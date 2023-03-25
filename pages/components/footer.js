import styles from '/styles/footer.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer(){
    return(
        <>
            <div className={styles.footer}>
                <div className={`container d-flex ${styles.contain}`}>
                    <div className={styles.resaue}>
                        <Image src='/assets/face2.png' width={9.64} height={18}/>
                        <Image src='/assets/insta.png' width={18} height={18} className={styles.img}/>
                        <Image src='/assets/twit.png' width={21.87} height={18} className={styles.img}/>
                        <Image src='/assets/pint.png' width={13.94} height={18} className={styles.img}/>
                        <Image src='/assets/tik.png' width={15.4} height={18} className={styles.img}/>
                        <Image src='/assets/what.png' width={17.96} height={18} className={styles.img}/>
                        <Image src='/assets/you.png' width={21.71} height={18} className={styles.img}/>
                    </div>

                    <div className={styles.proprio}>© Start, 2022. All rights reserved.</div>
                </div>
            </div>
        </>
    )
}