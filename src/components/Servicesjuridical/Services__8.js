import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesjuridical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud8 from '../../images/sud-8.png';
function Services_8({ onAppointment, onClose, onAppointmen }) {
    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_8' />
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
                            <h1 className="services__title">«Взыскание задолженности.»
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
                                <p className="about-text">Если ваша управляющая компания столкнулась с неплатежами и задержками по
                                    оплате от жильцов или других контрагентов, я готов помочь эффективно взыскать задолженность и восстановить
                                    финансовое равновесие. Разработаю стратегию взыскания, подготовлю необходимые документы и предприму все
                                    юридические меры — от досудебных требований до обращения в суд.</p>
                                <p className="about-text">Проанализирую причины задолженности, выявлю возможные способов урегулирования спора и
                                    использую законные инструменты для максимальной защиты ваших интересов. В случае необходимости — представлю ваши
                                    интересы в судебных органах, добившись взыскания долгов в максимально короткие сроки.</p>
                                <p className="about-text">Обратитесь ко мне — и я сделаю все возможное, чтобы ваша управляющая
                                    организация получила причитающиеся средства быстро и законно.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud8} />
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
export default Services_8;