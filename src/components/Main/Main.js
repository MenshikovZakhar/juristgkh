import Header from '../Header/Header';
import { Helmet } from 'react-v19-helmet-async';
import Maintitle from './Main-title/Main-title';
import Form from './Form/Form';
import Footer from '../Footer/Footer';
import Services from './Services/Services';
import Orderwork from './Orderwork/Orderwork';
import ScrollToTop from "react-scroll-to-top";
import './Main.css';
function Main({ onAppointment }) {

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
                <Maintitle />
                <Form />
                <Services />
                < Orderwork />
            </main>
            <Footer />
        </>
    );
}

export default Main;

