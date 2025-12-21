import Services__physical from './Services__physical';
import Services__juridical from './Services__juridical';
import './Services.css';
import React, { useState } from 'react';
function Services() {
    const [myBool, setmyBool] = useState(true);
    const onClickOpenMenu = () => {
        setmyBool(true);
    };

    const onClickCloseMenu = () => {
        setmyBool(false);
    };
    return (

        <section className="main-services">
            <h2 className="main-services__title">Cпектр юридических услуг</h2>
            <div className="main-services__menu">
                <button onClick={onClickOpenMenu} className="main-form__btn main-show-form" type="button">
                    <span className="btn__text">Для физических лиц</span>
                </button>
                <button onClick={onClickCloseMenu} className="main-form__btn main-show-form" type="button">
                    <span className="btn__text">Для юридических лиц</span>
                </button>
            </div>
            {myBool ? <Services__physical /> : <Services__juridical />}

        </section>
    )
}

export default Services;