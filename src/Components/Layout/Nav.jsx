import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {

    const [showMenu, setShowMenu] = useState(false)
    const [nav, setNav] = useState(0)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 250) {
                setNav(true)
                console.log(true)
            } else {
                setNav(false)
            }
        })
    })

    const handleMenuBtn = () => {
        if (!showMenu) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
    }

    return (
        <>
            <header>
                <div className={`menu ${nav? 'open': ''}`}>
                    <div className="menu_btn" onClick={handleMenuBtn}>
                        <span className={`menu_btn__burger ${showMenu? 'open': ''}`}></span>
                    </div>
                    <nav className={`nav ${showMenu? 'open': ''}`}>
                        <ul className={`menu_nav ${showMenu? 'open': ''}`}>
                            <li className={`menu_nav__item ${showMenu? 'open': ''}`} >
                                <NavLink to="/" onClick={() => setShowMenu(false)} className="menu_nav__link">Home</NavLink>
                            </li>
                            <li className={`menu_nav__item ${showMenu? 'open': ''}`}>
                                <NavLink to="about" onClick={() => setShowMenu(false)} className="menu_nav__link">About Me</NavLink>
                            </li>
                            <li className={`menu_nav__item ${showMenu? 'open': ''}`}>
                                <NavLink to="portfolio" onClick={() => setShowMenu(false)} className="menu_nav__link">My Project</NavLink>
                            </li>
                            <li className={`menu_nav__item ${showMenu? 'open': ''}`}>
                                <NavLink to="contact" onClick={() => setShowMenu(false)} className="menu_nav__link">Contact Me</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Nav