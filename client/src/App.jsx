// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
// Import Pages
import Home from './pages/Home';
import Weekly from './pages/Weekly';
import Activities from './pages/Activities';
import XP from './pages/XP';
import Dust from './pages/Dust';
import SeasonalReward from './pages/SeasonalReward';
import TimeSensitive from './pages/TimeSensitive';
import NotFoundPage from './pages/NotFoundPage';
// Import Components
import Menu from './layouts/Menu';
import FootNav from './layouts/FootNav';
// Import Utils/Data
import parsedSeasonalChallenges from './data/parsedSeasonalChallenges';
// import ScrollHook from './hooks/ScrollHook';
import { useGlobalContext } from './context/GlobalContext';
// CSS
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// What if App pulled in seasonal data and proped it to pages as a function, so we may run this function to updated parsed data and sync mulitple copies of a challenge in a page

function App() {

    if(localStorage.getItem('init23') !== 'true') {
        console.log('hit');
        localStorage.clear();
        localStorage.setItem('init23', 'true');
        console.log(localStorage.getItem('init23'));
        document.location.href = '/';
    }

    // * User
    const username = localStorage.getItem('username');
    const path = window.location.pathname
    if (username === null && path !== '/') {
        document.location.href = '/';
    }

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
    }, [darkMode, hidesLoader]);

    // Set Server Data
    useEffect(() => {
        async function makeAsync () {
        await parsedSeasonalChallenges().then(data => {
                dispatchGlobal({type:'setParsedData', payload: data})
            })
        }
        makeAsync();
    }, [])


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
                <Route exact path='/dust' element={<Dust />} />
                <Route exact path='/seasonal-reward' element={<SeasonalReward />} />
                <Route exact path='/time-sensitive' element={<TimeSensitive />} />
                <Route exact path='/seasonal-upgrades' element={<SeasonalReward />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <FootNav />
        </BrowserRouter>
    );
}

export default App;
