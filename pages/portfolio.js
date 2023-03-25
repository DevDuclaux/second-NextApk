import Image from 'next/image'
import style from '/styles/protlio.module.scss'

export default function portfolio(){
    return(
        <>
            <div className={`container ${style.teams}`}>
                <div className={style.teams_msg}>
                    <p className={style.team_title}>Works</p>
                    <p className={style.team_notes}>Portfolio</p>
                    <p className={style.team_texte}>Lorem ipsum, dolor sit amet consectetur<br/>adipisicing elit.</p>
                </div>
            </div>

            <div className={style.imgs}>
                <div className={style.newDiv}>
                    <div className={style.grp1}>
                        <Image src='/assets/vue1.png' width={570} height={334.54} className={style.msg2}/>
                        <Image src='/assets/vue2.png' width={570} height={334.54} className={style.msg2}/>
                    </div>
                    
                    <div className={style.grp2}>
                        <Image src='/assets/vue3.png' width={570} height={334.54} className={style.msg2}/>
                        <Image src='/assets/vu4.png' width={570} height={334.54} className={style.msg2}/>
                    </div>
                    
                    <div className={style.grp3}>
                        <Image src='/assets/vue5.png' width={570} height={334.54} className={style.msg2}/>
                        <Image src='/assets/vue6.png' width={570} height={334.54} className={style.msg2}/>
                    </div>
                    
                    <div className={style.grp4}>
                        <Image src='/assets/vue7.png' width={570} height={334.54} className={style.msg2}/>
                        <Image src='/assets/vue8.png' width={570} height={334.54} className={style.msg2}/>
                    </div>
                </div>
            </div>

            <div className={`container ${style.btn}`}>
                <button className={style.btn_profile}>Learn More</button>
            </div>
        </>
    )
}