import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Contacts.css';
import { Helmet } from 'react-v19-helmet-async';
import ScrollToTop from "react-scroll-to-top";
function Contacts({ onAppointment, onClose }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href='/contacts' />
            </Helmet>
            <Header
                onAppointment={onAppointment}
            />
            <main className='content'>
                <ScrollToTop smooth className="scrolltop" viewBox="0 0 24 24" />
            </main>
            <Footer onClose={onClose} />
        </>
    );



}
export default Contacts;