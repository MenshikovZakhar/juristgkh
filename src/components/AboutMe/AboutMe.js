import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './AboutMe.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";

import Orderwork from '../Main/Orderwork/Orderwork';
function AboutMe({ onAppointment, onClose }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href="/about" />

            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                < Orderwork />
            </main>
            <Footer onClose={onClose} />
        </>
    );



}
export default AboutMe;