
import './Main-title.css';

function Maintitle() {
    return (

        <section className="main-title">
            <div className="main-title__description">
                <div className="main-title__description-title main-show-title">
                    <h1 className="description__title">«Юридическая помощь в сфере ЖКХ для физических и юридических лиц»
                    </h1>
                    <button className="main-title__btn" type="button">
                        <span className="btn__text">Получить консультацию</span>
                    </button>
                </div>
                <div className="main-title__description-text main-show-text">
                    <div className="main-title__text">
                        <p className="description__text">Если ваша квартира пострадала от затопления или вы столкнулись с
                            проблемами в отношениях с управляющей компанией, вы можете рассчитывать на профессиональную
                            юридическую помощь. </p>
                        <p className="description__text"> Я помогу вам:</p>
                        <ul class="description__text-list">
                            <li class="description__text-item">
                                <p class="description__text">Оценить и взыскать ущерб с виновной стороны</p>
                            </li>
                            <li class="description__text-item">
                                <p class="description__text">Подготовить и подать все необходимые документы</p>
                            </li>
                            <li class="description__text-item">
                                <p class="description__text">Добиться справедливого решения в суде;</p>
                            </li>
                            <li class="description__text-item">
                                <p class="description__text">Решить споры с ЖКХ без лишних проблем</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Maintitle;