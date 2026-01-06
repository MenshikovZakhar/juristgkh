import sud from '../../../images/sud.jpg';
import sud2 from '../../../images/sud-2.png';
import sud3 from '../../../images/sud-3.png';
import sud4 from '../../../images/sud-4.png';
import sud6 from '../../../images/sud-6.png';
import sud5 from '../../../images/sud-5.jpg';
import './Services.css';
import { NavLink, Link } from 'react-router-dom';

function Services__physical() {
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
                                <p className="catalog__price"><span className="catalog__number">от 5 000</span> руб.</p>
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
                            <img src={sud2} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Отмена судебного приказа </h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">от 3 000</span> руб.</p>
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
                            <img src={sud3} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Списание задолженности по ЖКХ </h3>
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
                    <Link className="catalog__content" to="/services_1">
                        <div className="catalog__img">
                            <img src={sud4} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Споры с управляющими компаниями и ТСЖ</h3>
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
                    <Link className="catalog__content" to="/services_1">
                        <div className="catalog__img">
                            <img src={sud5} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Написание запросов и претензий</h3>
                            <div className="catalog__mark">
                                <p className="catalog__price"><span className="catalog__number">от 2 500</span> руб.</p>
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
                            <img src={sud6} />
                        </div>
                        <div className="catalog__info">
                            <h3 className="catalog__title">Оспаривание результатов общих<br></br>собраний собственников МКД </h3>
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

export default Services__physical;