import Image from 'next/image'
import style from '/styles/home.module.scss'

export default function Home(){
  return (
    <>  
      {/* -------head du homne page */}
      <main className={`d-flex ${style.head}`}>
        <div className={style.msg}>
          <p className={`h5 ${style.title}`}>welcome</p>
          <p className={`display-3 ${style.p_head}`}>Lorem ipsum dolor sit<br/>amet consectetur </p>
          <p className={style.corps}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>`
          <button className={style.btn_head}>Explore</button>
        </div>
        <Image src='/assets/img1.png' className={style.baniere} width={700} height={500}/>
      </main>

      <div className={`container ${style.corps}`}>
        <section className={style.partners}>
          <div className={style.messages}>
            <p className={style.msg1}>partners</p>
            <p className={style.msg2}>Lorem Ipsum Dolor</p>
            <p className={style.msg3}>Lorem ipsum, dolor sit amet consectetur<br/> adipisicing elit.</p>
          </div>

          <div className={`d-flex  ${style.pars_img}`}>
            <Image src='/assets/google.png' width={170} height={100} className={style.icon1}/>
            <Image src='/assets/ms.png' width={170} height={80} className={style.icon2}/>
            <Image src='/assets/air.png' width={170} height={70} className={style.icon3}/>
            <Image src='/assets/fb.png' width={170} height={130} className={style.icon4}/>
            <Image src='/assets/spot.png' width={170} height={70} className={style.icon5}/>
          </div>
          <button className={style.btn_part}>Learn More</button>
        
        </section>

        <div className={`d-flex  ${style.share}`}>
            <Image src='/assets/img2.png' width={645} height={379} className={style.share_img}/>
          
          <div className={style.share_msg}>
            <p className={`h2 ${style.share_title}`}>Lorem ipsum dolor sit amet consectetur</p>
            <p className={style.share_texte}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
            <button className={style.share_btn}>Learn More</button>
          </div>
        </div>
        
        <div className={`d-flex  ${style.body2}`}>
        <div className={style.body2_msg}>
          <p className={`h2 ${style.body2_title}`}>Lorem ipsum dolor sit amet consectetur</p>
          <p className={style.body2_texte}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam nobis cum est eos error ipsum, voluptate culpa nesciunt delectus iste?</p>
          <button className={style.body2_btn}>Learn More</button>
        </div>
        
        <Image src='/assets/img3.png' width={600} height={465.75} className={style.body2_img}/>
      </div>

      <div className={style.teams}>
          <div className={style.teams_msg}>
            <p className={style.team_title}>team</p>
            <p className={style.team_notes}>Our Talents</p>
            <p className={style.team_texte}>Lorem ipsum, dolor sit amet consectetur<br/>Suscipit nemo hic quos, ab,</p>
          </div>
      </div>

        <div className={style.profile}>
          <div className={`d-flex row container ${style.gens}`}>
              <div className={`col-xl-2 col-sm-4 ${style.profile1}`}>
                <Image src= '/assets/profile1.png' width={150} height={150} className={style.img_pro}/>
                <p className={style.nom}>Alexandra Stolz</p>
                <p className={style.poste}>DESIGNER</p>
              </div>

              <div className={` col-xl-2 col-sm-4 ${style.profile2}`}>
                <Image src= '/assets/profile2.png' width={150} height={150} className={style.img_pro}/>
                <p className={style.nom}>Janet Bray</p>
                <p className={style.poste}>DEVELOPER</p>
              </div>

              <div className={` col-xl-2 col-sm-4 ${style.profile3}`}>
                <Image src= '/assets/profile3.png' width={150} height={150} className={style.img_pro}/>
                <p className={style.nom}>Alexandra Stolz</p>
                <p className={style.poste}>DESIGNER</p>
              </div>

              <div className={` col-xl-2 col-sm-4 ${style.profile4}`}>
                <Image src= '/assets/profile4.png' width={150} height={150} className={style.img_pro}/>
                <p className={style.nom}>Janet Bray</p>
                <p className={style.poste}>DEVELOPER</p>
              </div>
          </div>
          

          <button className={style.btn_profile}>Learn More</button>
          </div>
      </div>
    </>
  )
}