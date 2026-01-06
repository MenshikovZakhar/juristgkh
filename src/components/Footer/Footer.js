import './Footer.css'
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import img from '../../images/footer-img.png';
import { Preloader } from '../Preloader/Preloader';
import {
    NOT_FOUND_MESSAGE,
    SAVE_MOVIE_MESSAGE,
} from '../../constants/index';
import success from '../../images/success.png';
import error from '../../images/error.png';


function Footer({ onClose }) {

    const [isEmailjsOpen, setEmailjsOpen] = useState(false);
    const [toSend, setToSend] = useState({
        name: '',
        phone: '',
        message: '',
        email: '',
    });
    const [errors, setErrors] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);
    const [messageAcceptAuth, setMessageAcceptAuth] = useState('');
    const [imgAcceptAuth, setImgAcceptAuth] = useState('');


    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_jqb24ow',
            'template_mlgutby',
            toSend,
            '-LJby7CkMCeE2d5DF'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setMessageAcceptAuth(SAVE_MOVIE_MESSAGE);
                setImgAcceptAuth(success);

            })
            .catch((err) => {
                console.log('FAILED...', err);
                setMessageAcceptAuth(NOT_FOUND_MESSAGE);
                setImgAcceptAuth(error);

            });

        setToSend('');
        setEmailjsOpen(true)
    };


    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: e.target.validationMessage });
        setIsFormValid(e.target.closest('form').checkValidity());
        setImgAcceptAuth("")
        setMessageAcceptAuth("");
        setIsLoading(false);
    };

    const handleMouseDown = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
            setEmailjsOpen(false)
        }
    };

    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(false);
    }, [setIsLoading]);

    return (
        <footer >
            <div onMouseDown={handleMouseDown}>
                {isEmailjsOpen ? (<div className="emailjs__message"> <h2 className='emailjs__title_2'>{messageAcceptAuth}</h2>
                    {isLoading ? null :
                        <Preloader />
                    }
                    <button
                        onLoad={() => setIsLoading(true)} style={isLoading ? {} : { display: 'none' }}
                        aria-label='Close'
                        className='form__close'
                        type='button'
                        onClick={() => { setToSend(''); setEmailjsOpen(false); onClose(false) }}
                    ></button>
                    <img onLoad={() => setIsLoading(true)} style={isLoading ? {} : { display: 'none' }} className="info-image" src={imgAcceptAuth} alt="Отправка" /></div>) :
                    (
                        <div className="site-footer">
                            <section className="footer-info">
                                <div className="container">
                                    <div className="footer-info__content">
                                        <h3 className="footer-info__title">Свяжитесь с нами любым удобным для Вас способом</h3>
                                    </div>
                                </div>
                            </section>
                            <section className="section footer-top">
                                <div className="container">
                                    <ul className="footer-list">
                                        <li className="footer-list__item footer-list__item--contacts">
                                            <h2 className="content-title content-title--left footer-list__title">Контактная информация</h2>
                                            <ul className="footer-contacts">
                                                <li className="footer-contacts__item">
                                                    <a className="link__a" href="https://t.me/@zm681986" target='blank'>

                                                        <div className="contacts-link contacts-link--adress">
                                                            <div className="contacts-link__name">Мессенджер</div>
                                                            <div className="contacts-link__text">Telegram</div>
                                                        </div>

                                                    </a>
                                                </li>
                                                <li className="footer-contacts__item">
                                                    <a className="link__a" href="tel:89507357984">
                                                        <div className="contacts-link contacts-link--phone">
                                                            <div className="contacts-link__name">Телефон</div>
                                                            <a className="contacts-link__number" href="tel:89507357984">+7(950) 735-79-84</a>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="footer-contacts__item">
                                                    <div className="contacts-link contacts-link--email">
                                                        <div className="contacts-link__name">E-mail</div>
                                                        <a className="contacts-link__text" href="mailto:zm681986@mail.ru">zm681986@mail.ru</a>
                                                    </div>
                                                </li>
                                                <li className="footer-contacts__item">
                                                    <div className="contacts-link contacts-link--time">
                                                        <div className="contacts-link__name">Режим работы</div>
                                                        <div className="contacts-link__text">Пн-Пт с 10:00 до 21:00 <br></br> Сб-Вс с 10:00 до 20:00 <br></br>(по предварительной записи)</div>
                                                    </div>

                                                </li>
                                            </ul>
                                            <div className="footer-list__img">
                                                <img className="footer-list__img" src={img} />
                                            </div>

                                        </li>
                                        <li className="footer-list__item">
                                            <div className="footer-form">
                                                <h2 className="content-title footer-form__title">Оставить заявку</h2>
                                                <form onSubmit={onSubmit} className="appointment-form appointment-form__content">
                                                    <ul className="appointment-form__list">
                                                        <li className="appointment-form__item">
                                                            <div className="appointment-form__control">
                                                                <label className="appointment-form__label">Ваше имя <span className="appointment-form__required">*</span></label>
                                                                <input
                                                                    className="appointment-form__input"
                                                                    type="text"
                                                                    name="name"
                                                                    title="Допускаются только буквы русского алфавита"
                                                                    placeholder="ФИО или имя"
                                                                    value={toSend.name || ''}
                                                                    onChange={handleChange}
                                                                    pattern="[а-яА-Яa-zA-ZёË\- ]{2,}"
                                                                    required />
                                                                <span className="register__error auth__error">{errors.name}</span>
                                                            </div>
                                                            <div className="appointment-form__control">
                                                                <label className="appointment-form__label">Контактный телефон <span className="appointment-form__required">*</span></label>
                                                                <input

                                                                    type="tel"
                                                                    name='phone'
                                                                    placeholder='Введите Ваш телефон'
                                                                    value={toSend.phone || ''}
                                                                    onChange={handleChange}
                                                                    pattern="^((8|\+7)[\- ]?)?\(?\d{3,5}\)?[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}[\- ]?\d{1}(([\- ]?\d{1})?[\- ]?\d{1})?$"
                                                                    required
                                                                    className="appointment-form__input appointment-form__input--tel"
                                                                />
                                                                <span className="register__error auth__error">{errors.phone}</span>
                                                            </div>
                                                            <div className="appointment-form__control">
                                                                <label className="appointment-form__label">Е-mail <span className="appointment-form__required">*</span></label>
                                                                <input
                                                                    className="appointment-form__input appointment-form__input--email"
                                                                    type="email"
                                                                    name="email"
                                                                    placeholder="example@example.com"
                                                                    required
                                                                    value={toSend.email || ''}
                                                                    onChange={handleChange}
                                                                    pattern="^\S+@\S+.\S+$"
                                                                />
                                                                <span className="register__error auth__error">{errors.email}</span>
                                                            </div>
                                                        </li>
                                                        <li className="appointment-form__item">
                                                            <div className="appointment-form__control">
                                                                <label className="appointment-form__label">Дополнительная информация</label>
                                                                <textarea
                                                                    className="appointment-form__input appointment-form__input--text"
                                                                    type="text"
                                                                    name="info"
                                                                />
                                                            </div>
                                                            <div class="footer-form__btn">
                                                                <button
                                                                    type="submit"
                                                                    disabled={!isFormValid}
                                                                    className={`btn appointment-form__btn ${isFormValid ? '' : 'appointment-form__btn_disabled'}`}>
                                                                    <span className={` register__submit-button btn__text ${isFormValid ? '' : 'btn__text_disabled'}`}>Отправить</span>
                                                                </button>
                                                            </div>
                                                            <div className="footer-form__outro"><span className="appointment-form__required">*</span> - поля обязательные для заполнения</div>
                                                        </li>
                                                    </ul>
                                                </form>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <section className="footer-bottom">

                                <div className="footer-bottom__left">
                                    <div className="copy">© 2026 jurist-gkh.ru</div>
                                </div>

                            </section>
                        </div>
                    )
                }
            </div>
        </footer>

    );
}


export default Footer;