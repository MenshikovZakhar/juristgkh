import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesphysical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import Services__physical from '../Main/Services/Services__physical';

function Servicesphysical({ onAppointment, onClose }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/servicesphysical' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
                <Services__physical />
            </main>
            <Footer onClose={onClose} />
        </>
    );



}
export default Servicesphysical;