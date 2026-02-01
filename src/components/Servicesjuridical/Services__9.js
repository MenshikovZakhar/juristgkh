import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesjuridical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import sud9 from '../../images/sud-9.png';

function Services_9({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/services_9' />
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
                            <h1 className="services__title">«Проведение общих собраний собственников жилья.»
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
                                <p className="about-text">Организация и проведение общего собрания собственников — важный этап в
                                    управлении многоквартирным домом. Я предлагаю профессиональные услуги по подготовке и проведению
                                    собраний, обеспечивая их законность, прозрачность и эффективное решение вопросов жителей.</p>
                                <p className="about-text">Проконсультирую вас по процедуре созыва, подготовлю необходимые документы,
                                    разработаю повестку дня и обеспечу соблюдение всех нормативных требований. Также сопровождаю весь процесс,
                                    составляю протоколы и оформляю решения, чтобы собрать поддержку большинства и защитить ваши интересы в
                                    случае возникновения споров.</p>
                                <p className="about-text">Обратитесь ко мне — и я помогу провести собрание на высшем
                                    уровне, гарантируя легитимность решений и соблюдение прав всех участников.
                                </p>

                            </div>
                            <div className="page-item__img">

                                <img src={sud9} />
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
export default Services_9;