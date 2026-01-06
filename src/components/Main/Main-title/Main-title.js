import { motion } from 'framer-motion';
import './Main-title.css';
const titleAnimation = {
    hidden: {
        y: -500,
        opacity: 0,

    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 2 },
        duration: 1,
    }),
}

const textAnimation = {
    hidden: {
        y: 500,
        opacity: 0,

    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 2 },
        duration: 1,
    }),
}

function Maintitle({ onAppointmen }) {
    return (

        <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.2, once: true }}
            className="main-title">
            <div className="main-title__description">
                <motion.div custom={1} variants={titleAnimation} className="main-title__description-title">
                    <h1 className="description__title">«Юридическая помощь в сфере ЖКХ для физических и юридических лиц»
                    </h1>
                    <button onClick={onAppointmen} className="main-title__btn" type="button">
                        <span className="btn__text">Получить консультацию</span>
                    </button>
                </motion.div>
                <motion.div custom={2} variants={textAnimation} className="main-title__description-text">
                    <div className="main-title__text">
                        <p className="description__text">Если ваша квартира пострадала от затопления или вы столкнулись с
                            проблемами в отношениях с управляющей компанией, вы можете рассчитывать на профессиональную
                            юридическую помощь. </p>
                        <p className="description__text"> Я помогу вам:</p>
                        <ul className="description__text-list">
                            <li className="description__text-item">
                                <p className="description__text">Оценить и взыскать ущерб с виновной стороны</p>
                            </li>
                            <li className="description__text-item">
                                <p className="description__text">Подготовить и подать все необходимые документы</p>
                            </li>
                            <li className="description__text-item">
                                <p className="description__text">Добиться справедливого решения в суде;</p>
                            </li>
                            <li className="description__text-item">
                                <p className="description__text">Решить споры с ЖКХ без лишних проблем</p>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Maintitle;