import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import phone from '../../images/phone.png';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
function Header({ onAppointment }) {

    return (
        <header className='header'>
            <Link to='/' className='header__link'>
                <img className='header__logo' src={logo} alt='logo' />
                <h1 className="header__title">ЮРИСТ&nbsp;ЖКХ</h1>
            </Link>
            <div className="header__content">
                <a className="header__phone" href="tel:+79514840077">
                    <img className='header__logo-phone' src={phone} alt='logo' />
                    <span className="header__text-phone">+7(951)484-00-77</span>
                </a>
                <Navigation />
            </div>
            <button className="btn" type="button">
                <span className="btn__text">Заказать звонок</span>
            </button>
        </header>
    );
};

export default Header;