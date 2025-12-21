import Header from '../Header/Header';
import { Helmet } from 'react-v19-helmet-async';
import Maintitle from './Main-title/Main-title';
import Form from './Form/Form';
import Services from './Services/Services';
function Main({ onAppointment }) {

    return (
        <>
            <Helmet>
                <title></title>
                <meta name="description" content="" />
                <link rel="canonical" href="/" />
            </Helmet>
            <Header

            />
            <main className='content'>
                <Maintitle />
                <Form />
                <Services />
            </main>

        </>
    );
}

export default Main;

