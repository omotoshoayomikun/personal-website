import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import ReactTypingEffect from 'react-typing-effect'

function Home() {
  return (
    <>
      <div className="home">
        <div className='flex-1-5'>
          <div className="home_text">Hi, I’m</div>
          <div className="home_text">AYOMIKUN</div>
          {/* <div className="home_text_name">Ayomikun</div> */}
          <div className="home_text_pro">
            I am a {' '}
            <span className="home_text_pro_text">
              <ReactTypingEffect
                text={["Frontend Developer"]}
                typingDelay={1000}
                eraseDelay={1000}
                eraseSpeed={200}
              // cursor="_"
              />
            </span>
          </div>
          <div className='home_content_text'>
            Highly motivated and well experience software developer with 3+ years of working experience in developing scalable,
            robust and user friendly web application using Html, Css/Scss, Javascript, React JS, Angular and so on.
          </div>
          <div className="icons_container1">
            <Link to='https://twitter.com/OmotoshoAJ' target='_blank' className='icons_ico_cont'>
              <BsTwitter className='icons_icon' />
            </Link>
            <Link to='https://www.instagram.com/omotosho_aj/' target='_blank' className='icons_ico_cont'>
              <BsInstagram className='icons_icon' />
            </Link>
            <Link to='https://github.com/omotoshoayomikun' target='_blank' className='icons_ico_cont'>
              <BsGithub className='icons_icon' />
            </Link>
            <Link to='https://www.linkedin.com/in/omotosho-ayomikun-61aa0623a/' target='_blank'  className='icons_ico_cont'>
              <BsLinkedin className='icons_icon' />
            </Link>
            <Link to='https://www.facebook.com/ayomikun.omotosho.5/' target='_blank' className='icons_ico_cont'>
              <BsFacebook className='icons_icon' />
            </Link>
          </div>
        </div>
        <div className="home_image_container flex-1">
          <img src="/img/7.png" alt="image" className="home_image_img" />
        </div>
      </div>
    </>
  )
}

export default Home