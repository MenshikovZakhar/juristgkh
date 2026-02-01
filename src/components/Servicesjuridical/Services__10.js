import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesjuridical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud from '../../images/sud.jpg';

function Services_10({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_10' />
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
                            <h1 className="services__title">«Представление интересов в судах.»
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
                                <p className="about-text">Обеспечьте надежную защиту своих прав и интересов в суде с помощью профессионального
                                    юриста. Я предлагаю вам полное сопровождение и представление интересов управляющих компаний и товариществ
                                    собственников жилья на всех стадиях судебных разбирательств — от подготовки исковых заявлений и жалоб до защиты
                                    в апелляционных и кассационных судах.</p>
                                <p className="about-text">Эффективно выстрою защиту ваших интересов в спорных ситуациях —
                                    будь то взыскание задолженности, оспаривание решений, споры с жильцами или контроль за законностью действий
                                    других участников.</p>
                                <p className="about-text">Доверьтесь профессионалу — и убедитесь, что ваши обязанности
                                    и права в жилищной сфере надежно защищены в суде.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud} />
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
export default Services_10;