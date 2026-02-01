import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud5 from '../../images/sud-5.jpg';

function Services_5({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_5' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <section

                    className="services-title">
                    <div className="main-title__description">
                        <div className="main-title__description-title">
                            <h1 className="services__title">«Подготовка запросов и претензий по вопросам ЖКХ.»
                            </h1>
                            <button onClick={onAppointmen} className="services-title__btn" type="button">
                                <span className="btn__text">Оставить заявку</span>
                            </button>
                        </div>
                    </div>
                </section>



                <section className="section section--page-item">
                    <div className="content-center">
                        <div className="page-item">
                            <div className="page-item__content">
                                <h2 className="page-item__price">от 2 500 руб.</h2>
                                <p className="about-text">Если у вас возникли проблемы с коммунальными услугами, необоснованные
                                    начисления или нарушения ваших прав со стороны управляющих компаний и ресурсоснабжающих организаций, я готов
                                    помочь вам выразить свои требования профессионально и эффективно. Подготовлю для вас грамотные запросы и
                                    претензии, отражающие ваши права и требования в соответствии с законодательством. </p>
                                <p className="about-text">Я учту все нюансы ситуации, так чтобы ваши обращения были максимально убедительными и
                                    способствовали быстрому решению вопросов. Правильная формулировка запроса — залог быстрых действий со стороны
                                    ответчика и предотвращение дальнейших разбирательств.</p>
                                <p className="about-text">Обратитесь ко мне — и я смогу обеспечить вам мощное
                                    юридическое средство для защиты ваших интересов и его реализации в практике ЖКХ.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud5} />
                                <div className="page-item__bg"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main >
            <Footer onClose={onClose} />
        </>
    );



}
export default Services_5;