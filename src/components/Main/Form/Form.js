
import './Form.css';

function Form() {
    return (

        <section className="main-form">
            <div className="main-form__description main-show-form">
                <p className="main-form__description-text">Ваша ситуация не отражена в списке?{'\n'}
                </p>
                <p className="main-form__description-text"> Оставьте заявку и мы обязательно Вам поможем!</p>
            </div>
            <button className="main-form__btn main-show-form" type="button">
                <span className="btn__text">Оставить заявку</span>
            </button>
        </section>
    )
}

export default Form;