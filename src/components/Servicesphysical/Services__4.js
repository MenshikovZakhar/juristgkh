import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud4 from '../../images/sud-4.png';

function Services_4({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_4' />
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
                            <h1 className="services__title">«Разрешение споров с управляющими компаниями и ТСЖ.»
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
                                <p className="about-text">Столкнулись с конфликтами или необоснованными требованиями со стороны управляющих компаний или товариществ собственников жилья?
                                    Я предоставлю квалифицированную консультацию и полное сопровождение в разрешении таких споров. </p>
                                <p className="about-text">Я защищу ваши права при оспаривании начислений, незаконных решений по управлению, необоснованных штрафов и взысканий.
                                    Помогу подготовить и подать жалобы, заинтересованные заявления и исковые обращения в судебные органы или надзорные инстанции. Использую
                                    комплексный подход, чтобы добиться справедливости и восстановления ваших прав в сфере ЖКХ. </p>
                                <p className="about-text">Доверьтесь профессионалу — я помогу вам установить законность и прозрачность в отношениях
                                    с управляющими организациями и ТСЖ, сохранив ваше спокойствие и финансы.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud4} />
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
export default Services_4;