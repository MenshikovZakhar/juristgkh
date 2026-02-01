import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import phone from '../../images/phone.png';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
function Header({ onAppointment }) {

    return (
        <header className='header'>
            <Link to='/' className='header__link one'>
                <img className='header__logo' src={logo} alt='logo' />
                <h1 className="header__title">ЮРИСТ&nbsp;ЖКХ</h1>
            </Link>
            <div className="header__content two">
                <a className="header__phone" href="tel:+79525178853">
                    <img className='header__logo-phone' src={phone} alt='logo' />
                    <span className="header__text-phone">+7(952)517-88-53</span>
                </a>
                <Navigation />
            </div>
            <button onClick={onAppointment} type="button" className="btn header__btn three">
                <span className="btn__text">Заказать звонок</span>
            </button>
        </header>
    );
};

export default Header;