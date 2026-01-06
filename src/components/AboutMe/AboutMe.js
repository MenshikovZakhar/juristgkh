import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AboutMe.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import foto from '../../images/foto.jpg';
import Orderwork from '../Main/Orderwork/Orderwork';
function AboutMe({ onAppointment, onClose }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href="/about" />

            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
            <main className='content'>
                <section className="section section--page-item">
                    <div className="content-center">
                        <div className="page-item">
                            <div className="page-item__content">
                                <h2 className="about-title">«Обо мне»</h2>
                                <p className="about-text"> Столкнулись с проблемами в отношениях с управляющей компанией? Вам нужен не просто
                                    юрист, а настоящий эксперт, который на собственном опыте знает, как устроена эта система изнутри? Я — ваш идеальный помощник.</p>
                                <p className="about-text">Меня зовут Машкин Данила Андреевич и я имею более 5 лет практического опыта работы
                                    юристом в управляющей организации, прошёл путь от юрисконсульта до начальника
                                    юридического отдела. Это даёт мне уникальное преимущество: я не просто знаю
                                    законы и судебную практику, а отлично понимаю внутренние механизмы работы
                                    управляющей компании — какие решения и документы они изготавливают,
                                    как строится их процесс принятия решений, какие методы защиты они используют
                                    в судах.</p>
                                <p className="about-text">Многие юристы работают с управляющими компаниями со стороны — исходя из теории
                                    и практики судебных дел. Я же знаю этот процесс изнутри, каждый этап и каждое
                                    слабое место. Именно поэтому моя работа не сводится к формальным стандартным
                                    действиям, а включает в себя комплексный анализ ситуации с учётом реальных
                                    внутренних процедур компании. Благодаря этому я могу эффективно использовать
                                    слабые места управляющей компании в интересах своих клиентов и добиваться
                                    максимального результата в суде.</p>

                            </div>
                            <div className="page-item__img">

                                <img src={foto} />
                                <div className="page-item__bg"></div>
                            </div>
                        </div>
                        <div className="page-item__bottom">

                            <p className="about-text">Обращаясь ко мне, вы получаете не просто юриста, а специалиста, который понимает, как
                                и почему принимаются те или иные решения, что можно оспаривать, а где управляющая
                                организация может пойти на уступки.</p>
                            <p className="about-text">Если вы хотите комплексную защиту ваших прав с учётом глубокого понимания работы
                                управляющей компании — я готов помочь вам и отстоять ваши интересы.</p>

                        </div>
                    </div>
                </section>

                < Orderwork />
            </main>
            <Footer onClose={onClose} />
        </>
    );



}
export default AboutMe;