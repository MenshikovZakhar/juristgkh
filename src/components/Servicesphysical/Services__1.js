import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";

import foto from '../../images/foto.jpg';
function Services_1({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_1' />
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
                            <h1 className="services__title">«Юридическое представление в судебных органах по делам ЖКХ»
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
                                <h2 className="page-item__price">от 5 000 руб.</h2>
                                <p className="about-text"> Обратившись ко мне, вы получите профессиональную поддержку
                                    и качественное представление ваших интересов во всех судебных инстанциях по вопросам ЖКХ.
                                    Я сопровождаю клиентов на каждом этапе судебного разбирательства — от подачи исковых заявлений и
                                    подготовки документов до защиты в судах разных уровней. </p>
                                <p className="about-text">Мои услуги включают защиту прав потребителей по ущербам, оспаривание
                                    решений управляющих компаний, оспаривание взыскания задолженности, разрешение споров по вопросам тарификации и
                                    нормативов, а также защиту в случаях необоснованных начислений или неправомерных действий со стороны УК или ТСЖ,
                                    и т.д. </p>
                                <p className="about-text">Я обеспечиваю индивидуальный подход, полную юридическую грамотность
                                    и максимальную заботу о ваших интересах. Пусть судебная защита станет для вас
                                    комфортным и эффективным инструментом в решении ЖКХ— доверяйте профессионалам!
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={foto} />
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
export default Services_1;