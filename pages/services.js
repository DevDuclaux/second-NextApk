import Image from 'next/image'
import style from '/styles/services.module.scss'

export default function Services (){
    return(
        <>
            <section className={`container ${style.cont}`}>
                <div className={style.header}>
                    <p className={style.title}>Plans</p>
                    <p className={style.description}>Our Services</p>
                    <p className={style.text}>Lorem ipsum, dolor sit amet consectetur<br/>adipisicing elit.</p>
                </div>

                <div className={style.corps}>
                    <div className={style.main2}>
                        <p className={style.first}>Basic</p>
                        <p className={style.price}><span>$100</span>/month</p>
                        <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <button className={style.btn_profile}>Learn More</button>
                    </div>

                    <div className={style.main}>
                        <p className={style.first}>Basic</p>
                        <p className={style.price}><span>$100</span>/month</p>
                        <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <button className={style.btn_profile}>Learn More</button>
                    </div>

                    <div className={style.main}>
                        <p className={style.first}>Basic</p>
                        <p className={style.price}><span>$100</span>/month</p>
                        <p className={style.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam</p>
                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <div className={style.msg}>
                            <Image src='/assets/Vector.png' width={17.19} height={13.28}/>
                            <p className={style.mots}>Lorem ipsum, dolor sit </p>
                        </div>

                        <button className={style.btn_profile}>Learn More</button>
                    </div>
                </div>
            </section>
        </>
    )
}