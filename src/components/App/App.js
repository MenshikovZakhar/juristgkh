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
        <Route exact path='/servicesjuridical' element={<Servicesjuridical onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/servicesphysical' element={<Servicesphysical onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
        <Route exact path='/services_1' element={<Services__1 onAppointmen={handleAppointmen} onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
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