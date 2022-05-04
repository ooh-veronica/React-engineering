import React from 'react'
import Content from './Content'
import './Nav.css'
import burger from '../../image/burger.png'
import logo from '../../image/logo.svg'


const Nav = () => (
    <header className='header'>
        <nav className='nav_container container'>
            <div className='nav_datalogo'>
                <div className='nav_burger'>
                    <img src={burger} alt='menu'></img>
                </div>
                <div className='nav_logo'>
                    <img src={logo} alt='logo'></img>
                </div>
            </div>
            <div className='nav_data'>
                <div className='nav_email'>
                    <div className='nav_email_text'>
                        <p>Пишите нам на email</p>
                    </div>
                    <div>
                        <p className='email'>info@diagnistics.by</p>
                    </div>
                </div>
                <div className='nav_phone'>
                    <div className='nav_email_text'>
                        <p className='phone'>Есть вопросы? Звоните!</p>
                    </div>
                    <div className='nav_phonenumber'>
                        <p>+375 (29) 456-45-45</p>
                    </div>
                </div>
            </div>
        </nav>
        <hr />
        <Content />
    </header>
)

export default Nav