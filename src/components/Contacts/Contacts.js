import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Maps from './Map/Map';
import instagram from '../../images/instagram.svg';
import telegram from '../../images/telegram.svg';
import vk from '../../images/vk.svg';
import phone from '../../images/phone.svg';
import whatsapp from '../../images/whatsapp.svg';
import location_1 from '../../images/location-1.svg';
import location_2 from '../../images/location-2.png';
import location_3 from '../../images/location-3.svg';
import location_4 from '../../images/location-4.svg';
import './Contacts.css';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Contacts({ onAppointment }) {
    return (
        <>
            <Helmet>
                <title>Контакты</title>
                <meta name="description" content="Телефон, Адрес, Режим работы, Валерия Смоленцева" />
                <link rel="canonical" href='/contacts' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='contacts'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <div className='map__description'>


                    <h2 className="map__title">Контакты</h2>

                    <div className="map__conteiner">
                        <div className="map__box">
                            <img className='map__iqons' src={location_1} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">Адрес</h3>
                                <span className="contacts__name">г. Челябинск, ул. Образцова, д.13</span>
                            </div>
                        </div>

                        <div className="map__box">
                            <img className='map__iqons' src={location_2} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">Телефон</h3>
                                <span className="contacts__name">+7(951)484-00-77</span>
                            </div>
                        </div>

                        <div className="map__box">
                            <img className='map__iqons' src={location_3} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">Режим работы</h3>
                                <span className="contacts__name">Пн-Вс: с 9-00 до 21-00 по предварительной записи</span>
                            </div>
                        </div>

                        <div className="map__box">
                            <img className='map__iqons' src={location_4} alt='logo' />
                            <div className="contacts__value">
                                <h3 className="contacts__title">E-mail</h3>
                                <span className="contacts__name">lera8787@inbox.ru</span>
                            </div>
                        </div>
                    </div>
                    <div className='contacts__communication'>
                        <a href="tel:+79514840077">
                            <img className='contacts__logo' src={phone} alt='logo' />
                        </a>
                        <a href="https://wa.me/79514840077" target="_blank" rel="noreferrer">
                            <img className='contacts__logo' src={whatsapp} alt='logo' />
                        </a>
                        <a href="https://instagram.com/valeria_colorist?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
                            <img className='contacts__logo' src={instagram} alt='logo' />
                        </a>
                        <a href="https://t.me/Valeria_Smolentseva" target="_blank" rel="noreferrer">
                            <img className='contacts__logo' src={telegram} alt='logo' />
                        </a>
                        <a href="https://vk.com/public200598040" target="_blank" rel="noreferrer">
                            <img className='contacts__logo' src={vk} alt='logo' />
                        </a>
                    </div>
                </div>
                <div className='maps'>
                    <Maps />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contacts;