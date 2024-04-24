import Searchplayers from './components/searchplayers/Searchplayers';
import Playerprofile from './components/playerprofile/Playerprofile';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/createprofile/Createprofile';
import About from './pages/about';
import Home from './pages/home';
import './App.css';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/playinfo' element={<Playerprofile />} />
        <Route path='/searchplayers' element={<Searchplayers />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
