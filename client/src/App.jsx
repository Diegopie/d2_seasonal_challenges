// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter, Router, Route, Routes, Switch } from 'react-router-dom';
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

// Import Utils/Data
// import ScrollHook from './hooks/ScrollHook';
import { useGlobalContext } from './context/GlobalContext';
// CSS
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Menu from './layouts/Menu';
import { parserServerData } from './api/parseServerData';

// What if App pulled in seasonal data and proped it to pages as a function, so we may run this function to updated parsed data and sync mulitple copies of a challenge in a page

function App() {
    // parserServerData();

    const [{ darkMode, hidesLoader, parsedData }, dispatchGlobal] = useGlobalContext();



    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            dispatchGlobal({ type: 'setDarkMode', payload: e.matches });
        })
    }

    // Remove Loading and Change Body Background Color On Dark Mode Change
    useEffect( () => {
        // * Hide Laoding Screen
        hidesLoader();
        // * Set Dark Mode
        if (darkMode) {
            document.body.classList.add('darkMode');
            return
        }
        document.body.classList.remove('darkMode');
        // Get Server Data
        // parserServerData().then(
        //     dispatchGlobal({ type: 'setParsedData' })
        // )
    }, [darkMode, hidesLoader, parserServerData])


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
                <Route exact path='weekly' element={<Weekly props={parsedData}/>} />
                <Route exact path='activities' element={<Activities />} />
                <Route exact path='/xp' element={XP} />
                <Route exact path='/seasonal-reward' element={SeasonalReward} />
                <Route exact path='/time-sensitive' element={TimeSensitive} />
                <Route element={NotFoundPage} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
