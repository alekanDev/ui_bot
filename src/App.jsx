import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateLayout from './layouts/PublicLayout'

// context
// import { UserProvider } from './context/UserProvider';

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Chats from './pages/Chats'
import Calendar from './pages/Calendar'
import Tasks from './pages/Tasks'
import UserProvider from './context/LocalUserProvider';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/tasks' element={ <PrivateLayout Children={ <Tasks/> } /> } />
          <Route path='/calendar' element={ <PrivateLayout Children={ <Calendar/> } /> } />
          <Route path='/chats' element={ <PrivateLayout Children={ <Chats/> } /> } />
          <Route path='/dashboard' element={ <PrivateLayout Children={ <Dashboard/> } /> } />
            <Route path='/' element={ 
            <UserProvider>
              <Login/> 
            </UserProvider>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
