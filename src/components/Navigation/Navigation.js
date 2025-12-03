import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';



function Navigation() {
    const [toggle, setToggle] = useState(true);

    const onClickOpenMenu = () => {
        setToggle(false);
    };

    const onClickCloseMenu = () => {
        setToggle(true);
    };

    return (
        <>

            <nav className='main-nav__inner'>

                <ul class="main-nav__navbar">
                    <NavLink className="main-nav__item main-nav__item--active" to='/'><p className="main-nav__link main-nav__link--active">Главная</p></NavLink>
                    <NavLink className="main-nav__item main-nav__item--parent"><p className="main-nav__link">Услуги для физических лиц</p>
                        <ul class="main-nav__sub main-nav__sub--dropdown">
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Абоненсткое обслуживание</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Взыскание задолженности за ЖКУ и капитальный ремонт</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Проведение общего собрания</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Представление интересов в судах</Link></li>
                        </ul>
                    </NavLink>

                    <NavLink className="main-nav__item main-nav__item--parent"><p className="main-nav__link">Услуги для юридических лиц</p>
                        <ul class="main-nav__sub main-nav__sub--dropdown">
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Абоненсткое обслуживание</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Взыскание задолженности за ЖКУ и капитальный ремонт</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Проведение общего собрания</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Представление интересов в судах</Link></li>
                        </ul>
                    </NavLink>
                    <NavLink className="main-nav__item" to='/about'><p className="main-nav__link">Обо&nbsp;мне</p></NavLink>
                    <NavLink className="main-nav__item" to='/contacts'><p className="main-nav__link">Контакты</p></NavLink>
                </ul>

            </nav>
        </>
    );
};

export default Navigation; 