// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
// Import Pages
import Homepage from './pages/Homepage';
import Activities from './pages/Activities';
import XP from './pages/XP';
import SeasonalReward from './pages/SeasonalReward';
import TimeSensitive from './pages/TimeSensitive';
import NotFoundPage from './pages/NotFoundPage';
// Import Components

// Import Utils/Data
import { useGlobalContext } from './context/GlobalContext';
// CSS
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ScrollHook from './hooks/ScrollHook';
import Menu from './layouts/Menu';

// What if App pulled in seasonal data and proped it to pages as a function, so we may run this function to updated parsed data and sync mulitple copies of a challenge in a page

function App() {

    const [{ darkMode, hidesLoader }, dispatchGlobal] = useGlobalContext();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            dispatchGlobal({ type: 'setDarkMode', payload: e.matches });
        })
    }

    // Remove Loading and Change Body Background Color On Dark Mode Change
    useEffect(() => {
        hidesLoader();
        if (darkMode) {
            document.body.classList.add('darkMode');
            return
        }
        document.body.classList.remove('darkMode');
    }, [darkMode, hidesLoader,])


    return (
        <Router>
            <ScrollHook />
            <ToastContainer
                position="top-right"
                transition={Zoom}
                autoClose={4000}
            />
            <Menu />
            <Routes>
                <Route exact path='/' element={<Homepage/>} />
                <Route exact path='/activities' element={<Activities/>} />
                <Route exact path='/xp' element={XP} />
                <Route exact path='/seasonal-reward' element={<SeasonalReward/>} />
                <Route exact path='/time-sensitive' element={<TimeSensitive/>} />
                <Route element={<NotFoundPage/>} />
            </Routes>
        </Router>
    );
}

export default App;
