import Header from '../Header/Header';
import { Helmet } from 'react-v19-helmet-async';
import Maintitle from './Main-title/Main-title';
import Form from './Form/Form';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Orderwork from './Orderwork/Orderwork';
import ScrollToTop from "react-scroll-to-top";
import { NavLink, Link } from 'react-router-dom';
import './Main.css';
function Main({ onAppointment, onClose, onAppointmen }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href="/" />

            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />

                <Maintitle onAppointmen={onAppointmen} />
                <Services />
                <Form onAppointmen={onAppointmen} />
                < Orderwork />
            </main>
            <Footer onClose={onClose} />
        </>
    );
}

export default Main;

