import { NavLink, Link } from 'react-router-dom';
import './Services.css';
import sud from '../../../images/sud.jpg';
function Services__juridical() {
    return (
        <section className="main-services">

            <ul className="catalog">
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_1">
                        <div className="catalog__img">
                            <img src={sud} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Представление интересов в судах</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">5 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_1">
                        <div className="catalog__img">
                            <img src={sud} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Представление интересов в судах</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">5 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_1">
                        <div className="catalog__img">
                            <img src={sud} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Представление интересов в судах</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">5 000</span> руб.</p>
                            </div>
                            <div className="btn catalog__btn">
                                <span className="btn__text">Подробнее</span>
                            </div>
                        </div>
                    </Link>
                </li>
                <li className="catalog__item">
                    <Link className="catalog__content" to="/services_1">
                        <div className="catalog__img">
                            <img src={sud} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Представление интересов в судах</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">5 000</span> руб.</p>
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