import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Profile from './components/createprofile/Createprofile';
import About from './pages/about';
import Home from './pages/Home';
import './App.css';
import PlearSearch from './pages/PlearSearch';
import Playerprofile from './components/playerprofile/Playerprofile';
import Dashboard from './pages/Dashboard';
import ViewProfile from './pages/ViewProfile';
import Articals from './pages/Articals';
import ShowArticle from './pages/ShowArticle';

const App =()=> {

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
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/ViewProfile/:id' element={<ViewProfile />} />
        <Route path='/Articles/:id' element={<Articals />} />
        <Route path='/ShowArticle/:profileId/:ArticleId' element={<ShowArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
