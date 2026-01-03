import { motion } from 'framer-motion';
import './Form.css';

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


function Form() {
    return (

        <motion.section
            initial="hidden"
            whileInView="visible"
            className="main-form"
            viewport={{ amount: 0.2, once: true }}>
            <motion.div custom={1} variants={Animation} className="main-form__description">
                <p className="main-form__description-text">Ваша ситуация не отражена в списке?{'\n'}
                </p>
                <p className="main-form__description-text"> Оставьте заявку и мы обязательно Вам поможем!</p>
            </motion.div>
            <motion.button custom={2} className="main-form__btn" type="button" variants={Animation}>
                <span className="btn__text">Оставить заявку</span>
            </motion.button>
        </motion.section >
    )
}

export default Form;