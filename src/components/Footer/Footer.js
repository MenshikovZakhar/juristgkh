import './Footer.css'


function Footer() {
    return (
        <footer className="site-footer">
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
                                    <div className="contacts-link contacts-link--adress">
                                        <div className="contacts-link__name">Мессенджер</div>
                                        <div className="contacts-link__text">Telegram</div>
                                    </div>
                                </li>
                                <li className="footer-contacts__item">
                                    <div className="contacts-link contacts-link--phone">
                                        <div className="contacts-link__name">Телефон</div>
                                        <a className="contacts-link__number" href="tel:89587090262">8 (958) 709-02-62</a>
                                    </div>
                                </li>
                                <li className="footer-contacts__item">
                                    <div className="contacts-link contacts-link--email">
                                        <div className="contacts-link__name">E-mail</div>
                                        <a className="contacts-link__text" href="mailto:info@pravogkh.ru">info@pravogkh.ru</a>
                                    </div>
                                </li>
                                <li className="footer-contacts__item">
                                    <div className="contacts-link contacts-link--time">
                                        <div className="contacts-link__name">Режим работы</div>
                                        <div className="contacts-link__text">Пн-Пт с 10:00 до 21:00 Сб-Вс с 10:00 до 20:00 (по предварительной записи)</div>
                                    </div>
                                </li>
                            </ul>


                        </li>
                        <li className="footer-list__item footer-list__item--form">
                            <div className="footer-form">
                                <h2 className="content-title footer-form__title">Оставить заявку</h2>
                                <form action="" method="post" className="appointment-form appointment-form__content">
                                    <ul className="appointment-form__list">
                                        <li className="appointment-form__item">
                                            <div className="appointment-form__control">
                                                <label className="appointment-form__label">Ваше имя <span className="appointment-form__required">*</span></label>
                                                <input className="appointment-form__input appointment-form__input" type="text" name="name" pattern="^[А-Яа-яЁё\s]+$" title="Допускаются только буквы русского алфавита" placeholder="ФИО или имя" required="" />
                                            </div>
                                            <div className="appointment-form__control">
                                                <label className="appointment-form__label">Контактный телефон <span className="appointment-form__required">*</span></label>
                                                <input className="appointment-form__input appointment-form__input--tel" type="tel" name="tel" placeholder="+7 (999) 999-99-99" required="" />
                                            </div>
                                            <div className="appointment-form__control">
                                                <label className="appointment-form__label">Е-mail <span className="appointment-form__required">*</span></label>
                                                <input className="appointment-form__input appointment-form__input--email" type="email" name="email" placeholder="example@example.com" required="" />
                                            </div>
                                        </li>
                                        <li className="appointment-form__item">
                                            <div className="appointment-form__control">
                                                <label className="appointment-form__label">Дополнительная информация</label>
                                                <textarea className="appointment-form__input appointment-form__input--text" type="text" name="info"></textarea>
                                            </div>
                                            <div className="appointment-form__privacy">
                                                <input type="checkbox" className="checkbox" id="checkbox-three" checked="" />
                                                <label for="checkbox-three"></label>
                                                <div className="privacy__outro">Согласие на <a href="/privacy/" target="_blank">обработку персональных данных</a></div>
                                            </div>
                                            <div className="footer-form__btn">
                                                <button type="submit" className="btn appointment-form__btn">
                                                    <span className="btn__text">Отправить</span>
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </form>
                                <div className="footer-form__outro"><span className="appointment-form__required">*</span> - поля обязательные для заполнения</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <div className="page-contacts">

            </div>
            <section className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom__left">
                        <div className="copy">© 2026 «ПравоЖКХ»</div>
                    </div>
                    <div className="footer-bottom__center">
                        <a className="privacy" href="/privacy/" target="_blank">Политика конфиденциальности</a>
                    </div>
                    <div className="footer-bottom__right">
                        <div className="orvin"><a href="https://orvin.ru/" target="_blank">Создание сайта</a> - Орвин</div>
                        <a className="up-button scrolling" href="#page"></a>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;