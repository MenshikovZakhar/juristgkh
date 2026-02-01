import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import CallPopup from '../CallPopup/CallPopup';
import OrderPopup from '../OrderPopup/OrderPopup';
import AboutMe from '../AboutMe/AboutMe';
import Contacts from '../Contacts/Contacts';
import Servicesphysical from '../Servicesphysical/Servicesphysical';
import Servicesjuridical from '../Servicesjuridical/Servicesjuridical';
import Services__1 from '../Servicesphysical/Services__1';
import Services__2 from '../Servicesphysical/Services__2';
import Services__3 from '../Servicesphysical/Services__3';
import Services__4 from '../Servicesphysical/Services__4';
import Services__5 from '../Servicesphysical/Services__5';
import Services__6 from '../Servicesphysical/Services__6';
import Services__7 from '../Servicesjuridical/Services__7';
import Services__8 from '../Servicesjuridical/Services__8';
import Services__9 from '../Servicesjuridical/Services__9';
import Services__10 from '../Servicesjuridical/Services__10';
import PageNotFound from '../PageNotFound/PageNotFound';
import { useState } from 'react';
function App() {
  const [isAppointmentpOpen, setAppointmentpOpen] = useState(false);
  const [isAppointmenpOpen, setAppointmenpOpen] = useState(false);
  const closePopupsMessage = () => {
    setAppointmentpOpen(false);
    setAppointmenpOpen(false);
  };

  const handleAppointment = () => {
    setAppointmentpOpen(true)

  }

  const handleAppointmen = () => {
    setAppointmenpOpen(true)
  }
  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={<Main onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/about' element={<AboutMe onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/contacts' element={<Contacts onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/servicesjuridical' element={<Servicesjuridical onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/servicesphysical' element={<Servicesphysical onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_1' element={<Services__1 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_2' element={<Services__2 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_3' element={<Services__3 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_4' element={<Services__4 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_5' element={<Services__5 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_6' element={<Services__6 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_7' element={<Services__7 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_8' element={<Services__8 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_9' element={<Services__9 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_10' element={<Services__10 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='*' element={<PageNotFound />} />

      </Routes>
      <CallPopup
        isOpen={isAppointmentpOpen}
        onClose={closePopupsMessage}
      />
      <OrderPopup
        isOpen={isAppointmenpOpen}
        onClose={closePopupsMessage}
      />

    </div>
  )
}
export default App;