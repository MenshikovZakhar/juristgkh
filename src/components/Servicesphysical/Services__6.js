import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud6 from '../../images/sud-6.png';

function Services_6({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_6' />
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
                            <h1 className="services__title">«Оспаривание решений общих собраний собственников жилья.»
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
                                <h2 className="page-item__price">от 20 000 руб.</h2>
                                <p className="about-text">Если вы считаете, что принятое на общем собрании решение нарушает ваши права или было
                                    сформировано с нарушением процедурных правил, я готов защитить ваши интересы. Профессионально подготовлю и окажу
                                    юридическую поддержку в оспаривании незаконных или необоснованных решений, чтобы обеспечить законность ваших прав.</p>
                                <p className="about-text">Я проанализирую протоколы общих собраний собственников МКД, документацию, процедуру голосования и
                                    основания принятия решений, чтобы выявить нарушения. В случае необходимости — подготовлю соответствующее исковое
                                    заявление в суд, или орган государственной жилищной инспекции. Моя цель — обеспечить соблюдение ваших прав и
                                    справедливое разрешение спорных ситуаций.</p>
                                <p className="about-text">Обратитесь ко мне — я помогу вам защитить ваши законные права и добиться справедливых решений в
                                    жилищных вопросах.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud6} />
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
export default Services_6;