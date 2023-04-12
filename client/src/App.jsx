// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
// Import Pages
import Home from './pages/Home';
import Weekly from './pages/Weekly';
import Activities from './pages/Activities';
import XP from './pages/XP';
import SeasonalReward from './pages/SeasonalReward';
import TimeSensitive from './pages/TimeSensitive';
import NotFoundPage from './pages/NotFoundPage';
// Import Components
import Menu from './layouts/Menu';
// Import Utils/Data
// import ScrollHook from './hooks/ScrollHook';
import { useGlobalContext } from './context/GlobalContext';
// CSS
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

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
        // * Hide Laoding Screen
        hidesLoader();
        // * Set Dark Mode
        if (darkMode) {
            document.body.classList.add('darkMode');
            return
        }
        document.body.classList.remove('darkMode');
        // * Page Data
    }, [darkMode, hidesLoader])


    return (
        <BrowserRouter>
            {/* <ScrollHook /> */}
            <ToastContainer
                position="top-right"
                transition={Zoom}
                autoClose={4000}
            />
            <Menu />
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='weekly' element={<Weekly />} />
                <Route exact path='activities' element={<Activities />} />
                <Route exact path='/xp' element={<XP />} />
                <Route exact path='/seasonal-reward' element={<SeasonalReward />} />
                <Route exact path='/time-sensitive' element={<TimeSensitive />} />
                <Route element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
