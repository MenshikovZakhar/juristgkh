import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navigation.css';
import HiddenMenu from '../HiddenMenu/HiddenMenu';


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

            {toggle ? (
                <div className='nav-menu__menu-adapt menu-toggler--main' onClick={onClickOpenMenu}></div>
            ) : (
                <HiddenMenu onClickCloseMenu={onClickCloseMenu} />
            )}
            <nav className='main-nav__inner'>

                <ul class="main-nav__navbar">
                    <li className="main-nav__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'

                            } to='/'>Главная</NavLink>
                    </li>

                    <li className="main-nav__item main-nav__item--parent">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'

                            } to='/servicesphysical'>Услуги для физических лиц

                        </NavLink>
                        <ul class="main-nav__sub main-nav__sub--dropdown">
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_1">Представление в судах</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_2">Отмена судебного приказа</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_3">Списание задолженности по ЖКХ</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_4">Споры с управляющими компаниями и ТСЖ</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_5">Написание запросов и претензий</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_6">Оспаривание результатов ОСС</Link></li>
                        </ul>
                    </li>
                    <li className="main-nav__item main-nav__item--parent">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'

                            } to='/servicesjuridical'>Услуги для юридических лиц

                        </NavLink>
                        <ul class="main-nav__sub main-nav__sub--dropdown">
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_7">Абоненсткое обслуживание</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_8">Взыскание задолженности за ЖКУ и капитальный ремонт</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_9">Проведение общего собрания</Link></li>
                            <li class="main-nav__item"><Link className="main-nav__link" to="/services_10">Представление интересов в судах</Link></li>
                        </ul>
                    </li>

                    <li className="main-nav__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'

                            } to='/about'>Обо&nbsp;мне</NavLink>
                    </li>

                    <li className="main-nav__item">
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? 'main-nav__link main-nav__link--active' : 'main-nav__link'

                            } to='/contacts'>Контакты</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation; 