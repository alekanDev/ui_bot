import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateLayout from './layouts/PublicLayout'

// pages
import Dashboard from './pages/Dashboard'
import Chats from './pages/Chats'
import Calendar from './pages/Calendar'
import Tasks from './pages/Tasks'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/tasks' element={ <PrivateLayout Children={ <Tasks/> } /> } />
          <Route path='/calendar' element={ <PrivateLayout Children={ <Calendar/> } /> } />
          <Route path='/chats' element={ <PrivateLayout Children={ <Chats/> } /> } />
          <Route path='/' element={ <PrivateLayout Children={ <Dashboard/> } /> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
