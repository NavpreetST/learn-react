
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { Home } from './pages/home';
import { Contact } from './pages/contact';
import { Menu } from './pages/menu';
import { Error } from './error';
import { Navbar } from './pages/navbar';
import { States } from './pages/stateManagement';
import { ChangeProfile } from './pages/ChangeProfile';
import { Profile } from './pages/profile';
import { useState, createContext } from 'react';


export const AppContext = createContext();


function App() {
  const [username, setUsername] = useState("Soundwave");

  return (
    <div className="App">
      <AppContext.Provider value = {{username, setUsername}}>

      <Router>
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/menu" element = {<Menu />} />
          <Route path = "/profile" element = {<Profile />} />
          <Route path = "/contact" element = {<Contact />} />
          <Route path = "/states" element = {<States />} />
          <Route path = "/changeProfile" element= {<ChangeProfile />} />
          <Route path = "*" element = { <Error />} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;
