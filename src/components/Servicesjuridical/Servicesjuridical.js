import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Servicesjuridical.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
import Services__juridical from '../Main/Services/Services__juridical';

function Servicesjuridical({ onAppointment, onClose }) {

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
                <h2 className="services__content-title">Услуги для юридических лиц</h2>
                <Services__juridical />
            </main>
            <Footer onClose={onClose} />
        </>
    );



}
export default Servicesjuridical;