import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import CallPopup from '../CallPopup/CallPopup';
import OrderPopup from '../OrderPopup/OrderPopup';
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