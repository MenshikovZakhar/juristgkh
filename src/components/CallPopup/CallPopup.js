import './CallPopup.css';
import { useState, useEffect } from 'react';
import { send } from 'emailjs-com';
import classNames from 'classnames';

import { Preloader } from '../Preloader/Preloader';
import {
    NOT_FOUND_MESSAGE,
    SAVE_MOVIE_MESSAGE,
} from '../../constants/index';
import success from '../../images/success.png';
import error from '../../images/error.png';
function CallPopup({ isOpen, onClose, }) {
    const classPopup = classNames(`popup`, {
        popup_opened: isOpen
    });
    const [isEmailjsOpen, setEmailjsOpen] = useState(false);
    const [toSend, setToSend] = useState({
        name: '',
        phone: '',
        message: '',
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
        <div className={classPopup} onMouseDown={handleMouseDown}>
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
                <img onLoad={() => setIsLoading(true)} style={isLoading ? {} : { display: 'none' }} className="info-image" src={imgAcceptAuth} alt="Отправках" /></div>) :
                (

                    <div className="modal-form__content">
                        <h2 className="modal-form__title">Заказать звонок</h2>
                        <button
                            type="button"
                            className="modal-form__close"
                            aria-label="Close"
                            onClick={() => { setToSend(''); setEmailjsOpen(false); onClose(false) }}>
                        </button>
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

                                </li>
                                <li className="appointment-form__item">

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

                )
            }



        </div>
    );
}

export default CallPopup;