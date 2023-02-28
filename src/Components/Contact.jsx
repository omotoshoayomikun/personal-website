import React, { useState } from 'react'
import TextArea, { Input } from './Form/Input'
import { Btn } from './Form/Button'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

function Contact() {

  const { value, setValue } = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  return (
    <>
      <div className="contact">
        <div className="contact_bio_img">
          <div className="contact_bio">
            <h1 className="text_secondary">My Contact</h1>
          </div>
        </div>
        <div className="contact_wrap">
          <div className="contact_wrap_box1">
            <div className="card nbm">
              <div className='img_con'>
                <img src="/img/contact.png" alt="" className="img" />
              </div>
              <h2 className='text_secondary text_header'>Omotosho Ayomikun</h2>
              <div className='text mb-4'>
                I am available for work. Connect with me via and call in to my account.
              </div>
              <div className='text mb-1'>Phone: +2349054544641</div>
              <div className='text mb-6'>Email: omotoshoayomikun@gmail.com</div>

              <div>
                <h5 className='mb-7'>FIND WITH ME</h5>
                <div className="icons_container1">
                  <Link to='' className='icons_ico_cont'>
                    <BsTwitter className='icons_icon' />
                  </Link>
                  <Link to='' className='icons_ico_cont'>
                    <BsLinkedin className='icons_icon' />
                  </Link>
                  <Link to='' className='icons_ico_cont'>
                    <BsInstagram className='icons_icon' />
                  </Link>
                  <Link to='' className='icons_ico_cont'>
                    <BsFacebook className='icons_icon' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_wrap_box2">
            <div className="card">
              <div className="card_row">
                <div className="col">
                  <Input value='' label='Your Name' />
                </div>
                <div className="col">
                  <Input value='' label='Phone Number' />
                </div>
              </div>
              <div className="card_row">
                <div className="col">
                  <Input value='' label='email' />
                </div>
              </div>
              <div className="card_row">
                <div className="col">
                  <Input value='' label='subject' />
                </div>
              </div>
              <div className="card_row">
                <div className="col">
                  <TextArea label='Message' />

                </div>
              </div>
              <div>
                <Btn />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact