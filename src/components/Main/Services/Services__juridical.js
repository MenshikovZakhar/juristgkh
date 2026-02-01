import { NavLink, Link } from 'react-router-dom';
import './Services.css';
import sud from '../../../images/sud.jpg';
import sud7 from '../../../images/sud-7.png';
import sud8 from '../../../images/sud-8.png';
import sud9 from '../../../images/sud-9.png';
function Services__juridical() {
    return (
        <section className="main-services">

            <ul className="catalog-jur">
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_7">
                        <div className="catalog__img">
                            <img src={sud7} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Абонентское обслуживание</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">от 10 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_8">
                        <div className="catalog__img">
                            <img src={sud8} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Взыскание задолженности</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">от 5 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_9">
                        <div className="catalog__img">
                            <img src={sud9} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Проведение общих собраний собственников</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">от 20 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_10">
                        <div className="catalog__img">
                            <img src={sud} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Представление интересов в судах</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">от 5 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>


            </ul>

        </section>
    )
}

export default Services__juridical;