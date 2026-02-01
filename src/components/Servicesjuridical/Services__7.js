import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesjuridical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud7 from '../../images/sud-7.png';

function Services_7({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_7' />
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
                            <h1 className="services__title">«Абонентское юридическое обслуживание управляющих компаний и ТСЖ.»
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
                                <h2 className="page-item__price">от 10 000 руб.</h2>
                                <p className="about-text">Обеспечьте бесперебойное и законное функционирование вашей управляющей
                                    компании с помощью моих профессиональных услуг по абонентскому юридическому обслуживанию.
                                    Я предлагаю комплексную поддержку в вопросах ЖКХ, регулярно консультирую по правовым аспектам работы,
                                    разрабатываю внутренние документы, регламентирующие деятельность, и сопровождаю вас в решении текущих
                                    юридических задач.</p>
                                <p className="about-text">Помогут минимизировать риски правовых споров, подготовить договоры, жалобы,
                                    обращения, а также обеспечить представление интересов в контролирующих органах и судах. Я адаптирую
                                    свои услуги под специфику вашей компании, чтобы вы могли сконцентрироваться на выполнении своих задач,
                                    оставаясь уверенными в правовой защите.</p>
                                <p className="about-text">Доверьте юридическую поддержку вашей управляющей организации — и получите
                                    надежного партнера в сфере ЖКХ.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud7} />
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
export default Services_7;