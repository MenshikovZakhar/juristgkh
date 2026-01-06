import Services__physical from './Services__physical';
import Services__juridical from './Services__juridical';
import './Services.css';
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
function Services() {
    const [isActive, setisActive] = useState(true)
    const [Active, setActive] = useState(false)
    const [myBool, setmyBool] = useState(true);
    const onClickPhysicalMenu = () => {
        setmyBool(true);
        setisActive(true);
        setActive(false);
    };

    const onClickJuridicalMenu = () => {
        setmyBool(false);
        setisActive(false);
        setActive(true);
    };


    return (

        <section className="main-services">


            <h2 className="services__content-title">Виды юридических услуг</h2>
            <div className="nav nav-tabs tab-list">

                <li className="nav-item tab-list__item">
                    <button
                        onClick={onClickPhysicalMenu}
                        className={isActive ? 'nav-link tab-list__link active' : 'nav-link tab-list__link'}
                    >
                        Услуги для физических лиц</button>
                </li>

                <li className="nav-item tab-list__item">
                    <button onClick={onClickJuridicalMenu}
                        className={Active ? 'nav-link tab-list__link active' : 'nav-link tab-list__link'}
                    >Услуги для юридических лиц</button>
                </li>

            </div>
            {myBool ? <Services__physical /> : <Services__juridical />}
        </section>



    )
}
export default Services;