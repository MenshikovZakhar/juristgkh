import './App.css';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import CallPopup from '../CallPopup/CallPopup';
import { useState } from 'react';
function App() {
  const [isAppointmentpOpen, setAppointmentpOpen] = useState(false);
  const closePopupsMessage = () => {

    setAppointmentpOpen(false);
  };

  const handleAppointment = () => {
    setAppointmentpOpen(true)
  }
  return (
    <div className='page'>
      <Routes>
        <Route path="/" element={<Main onAppointment={handleAppointment} onClose={closePopupsMessage} />} />
      </Routes>
      <CallPopup
        isOpen={isAppointmentpOpen}
        onClose={closePopupsMessage}
      />
    </div>
  )
}
export default App;