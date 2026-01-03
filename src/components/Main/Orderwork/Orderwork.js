import { motion } from 'framer-motion';
import './Orderwork.css';

const Animation = {
    hidden: {
        x: -500,
        opacity: 0,

    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.2, duration: 2 },
        duration: 1,
    }),
}


function Orderwork() {
    return (

        <motion.section
            initial="hidden"
            whileInView="visible"
            className="section--stages"
            viewport={{ amount: 0.2, once: true }}>

            <div className="content-center">
                <h2 className="content-title">Как мы работаем</h2>
                <ul className="stages">
                    <li className="stages__item">
                        <div className="stages__content fadeInRight wow animated animated" >
                            <p className="stages__count">01</p>
                            <div className="stages__icon stages__icon--one"></div>
                            <h3 className="stages__title">Консультация</h3>
                            <p className="stages__text">Изучение ситуации и проблемы доверителя</p>
                        </div>
                    </li>
                    <li className="stages__item">
                        <div className="stages__content fadeInRight wow animated animated" >
                            <p className="stages__count">02</p>
                            <div className="stages__icon stages__icon--two"></div>
                            <h3 className="stages__title">Заключение соглашения</h3>
                            <p className="stages__text">Согласование условий и определение позиции по делу</p>
                        </div>
                    </li>
                    <li className="stages__item">
                        <div className="stages__content fadeInRight wow animated animated" >
                            <p className="stages__count">03</p>
                            <div className="stages__icon stages__icon--three"></div>
                            <h3 className="stages__title">Составление документов</h3>
                            <p className="stages__text">Подготовка документов и совершение необходимых действий</p>
                        </div>
                    </li>
                    <li className="stages__item">
                        <div className="stages__content fadeInRight wow animated animated" >
                            <p className="stages__count">04</p>
                            <div className="stages__icon stages__icon--four"></div>
                            <h3 className="stages__title">Результат</h3>
                            <p className="stages__text">Достижение поставленных доверителем целей</p>
                        </div>
                    </li>
                </ul>
            </div>



        </motion.section >
    )
}

export default Orderwork;