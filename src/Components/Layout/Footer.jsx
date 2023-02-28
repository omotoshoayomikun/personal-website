import React from 'react'
import { Link } from 'react-router-dom'
// import { AiFillTwitterCircle, AiFillInstagram } from 'react-i cons/ai'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'


function Footer() {

    const year = new Date().getFullYear()

    return (
        <>
            <footer className="footer">
                <div className="footer_container1">
                    <Link to='' className='footer_ico_cont'>
                        <BsTwitter className='footer_icon' />
                    </Link>
                    <Link to='' className='footer_ico_cont'>
                        <BsFacebook className='footer_icon' />
                    </Link>
                    <Link to='' className='footer_ico_cont'>
                        <BsInstagram className='footer_icon' />
                    </Link>
                    <Link to='' className='footer_ico_cont'>
                        <BsGithub className='footer_icon' />
                    </Link>
                </div>
                <div className="footer_container2">
                    &copy; Copyright {year}
                </div>
            </footer>
        </>
    )
}

export default Footer