import Image from 'next/image'
import style from '/styles/contacts.module.scss'

export default function Services() {
    return (
        <>
            <section className={`container ${style.section1}`}>
                <div className={style.div1}>
                    <p className={style.p}>Contact Us</p>
                    <p className={style.p2}>Lorem ipsum, dolor sit amet consectetur<br/>adipisicing elit.</p>
                </div>
            </section>
            <section className={`container ${style.cont}`}>
                <div className={style.div2}>
                    <form action='/' method='post' className={style.form}>
                        <label for='name' className={style.label1}>Name</label><br/>
                        <input type='text' name='name' id='name' className={style.input2}/><br/>
                        <label for='mail' className={style.label2}>Email</label><br/>
                        <input type='email' id='maail' className={style.input2}/><br/>
                        <label for='Message' className={style.label3}>Message</label><br/>
                        <input type='text'className={style.input3}/>
                        <button className={style.btn} type='submit'>Submit</button>
                    </form><br/>

                    <Image src='/assets/ghhgnhg 1.png' width={575} height={384} className={style.img}/>
                </div>
            </section>
        </>
    )
}