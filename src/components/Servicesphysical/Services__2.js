import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud2 from '../../images/sud-2.png';

function Services_2({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_2' />
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
                            <h1 className="services__title">«Отмена судебного приказа по взысканию задолженности за ЖКХ»
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
                                <h2 className="page-item__price">от 3 000 руб.</h2>
                                <p className="about-text"> Если против вас был вынесен судебный приказ о взыскании задолженности за коммунальные услуги,
                                    не торопитесь его исполнять. Я помогу оспорить или отменить судебный приказ, чтобы защитить ваши интересы и
                                    избежать нежелательных исполнительных действий. </p>
                                <p className="about-text">Тщательно проанализирую основания вынесения приказа, соберу необходимые доказательства и подготавливаю
                                    обоснованные возражения. Благодаря моему опыту вы сможете эффективно остановить принудительное взыскание и
                                    добиться справедливого разрешения ситуации. </p>
                                <p className="about-text">Обратитесь ко мне — и я помогу вам повернуть ситуацию в вашу пользу, сохранив ваши права и финансы.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud2} />
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
export default Services_2;