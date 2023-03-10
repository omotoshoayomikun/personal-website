import React, { useState } from 'react'
import TextArea, { Input } from './Form/Input'
import { Btn } from './Form/Button'
import { Link } from 'react-router-dom'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { SmSpinner } from './Form/Spinner'

function Contact() {

  document.title = 'Omotosho Ayomikun Contact';
  const notify = (message) => toast.success(message);
  const Errnotify = (message) => toast.error(message);

  const [value, setValue] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  })

  const [spinner, setSpinner] = useState(false)

  const onChange = (e, name) => {
    setValue({ ...value, [name]: e.target.value })
  }

  const handleSubmit = () => {
    if (value.name === '' || value.phone === '' || value.message === '' || value.subject === '' || value.email === '') {
      Errnotify("All fields must be filled")
    } else {
      setSpinner(true)
      emailjs.send('service_g401bj6', 'template_jrry03i', value, 'ElCEm00E3DnLjft1k')
        .then((result) => {
          setSpinner(false)
          notify("🚀 Email sent!")
          setValue({ name: '', phone: '', message: '', subject: '', email: '' })
        }, (error) => {
          setSpinner(false)
          Errnotify("🔄 Please check your internet and Try again!")
        });
    }

  }

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
                  <Link to='https://twitter.com/OmotoshoAJ' target='_blank' className='icons_ico_cont'>
                    <BsTwitter className='icons_icon' />
                  </Link>
                  <Link to='https://www.linkedin.com/in/omotosho-ayomikun-61aa0623a/' target='_blank' className='icons_ico_cont'>
                    <BsLinkedin className='icons_icon' />
                  </Link>
                  <Link to='https://www.instagram.com/omotosho_aj/' target='_blank' className='icons_ico_cont'>
                    <BsInstagram className='icons_icon' />
                  </Link>
                  <Link to='https://www.facebook.com/ayomikun.omotosho.5/' target='_blank' className='icons_ico_cont'>
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
                  <Input value={value.name} name='name' onChange={onChange} label='Your Name' />
                </div>
                <div className="col">
                  <Input value={value.phone} name='phone' onChange={onChange} label='Phone Number' />
                </div>
              </div>
              <div className="card_row">
                <div className="col">
                  <Input value={value.email} name='email' onChange={onChange} label='email' />
                </div>
              </div>
              <div className="card_row">
                <div className="col">
                  <Input value={value.subject} name='subject' onChange={onChange} label='subject' />
                </div>
              </div>
              <div className="card_row">
                <div className="col">
                  <TextArea value={value.message} name='message' onChange={onChange} label='Message' />

                </div>
              </div>
              <div>
                <Btn onClick={handleSubmit} text={spinner ? <div className='flex-dis'><div className="mr-1 flex-dis"> <SmSpinner text='Loading...' /> </div></div> : 'send message'} />
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}

export default Contact