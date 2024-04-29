import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/createprofile/Createprofile';
import About from './pages/about';
import Home from './pages/home';
import './App.css';
import PlearSearch from './pages/PlearSearch';
import Playerprofile from './components/playerprofile/Playerprofile';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Playerprofile' element={<Playerprofile />} />
        <Route path='/PlearSearch' element={<PlearSearch />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
