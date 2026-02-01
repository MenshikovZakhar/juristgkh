import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud3 from '../../images/sud-3.png';
import foto from '../../images/foto.jpg';
function Services_3({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_3' />
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
                            <h1 className="services__title">«Помощь в снижении или списании задолженности»
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
                                <p className="about-text">Столкнулись с проблемой высокой задолженности за ЖКХ? Я помогу вам снизить сумму долга или полностью
                                    списать задолженность в рамках действующего законодательства. Проанализирую вашу ситуацию, выявлю неправомерные начисления и найду юридические
                                    основания для защиты ваших прав. </p>
                                <p className="about-text">В моей практике — эффективные методы переговоров с управляющими компаниями и ресурсоснабжающими организациями,
                                    подготовка заявлений и жалоб, а также представление интересов в судебных инстанциях. Я помогу вам добиться пересмотра начислений,
                                    применения специальных льгот, компенсаций или незаконных штрафных санкций. </p>
                                <p className="about-text">Обращайтесь ко мне — я сделаю все возможное, чтобы ваша финансовая нагрузка по ЖКУ стала менее обременительной
                                    и справедливой. Ваша экономия и спокойствие — моя главная задача!
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud3} />
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
export default Services_3;