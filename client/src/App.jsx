// Import Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

function App() {

    const [{ darkMode, hidesLoader }, dispatch] = useGlobalContext();

    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            dispatch({ type: 'setDarkMode', payload: e.matches });
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
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route exact path='/activities' component={Activities} />
                <Route exact path='/xp' component={XP} />
                <Route exact path='/seasonal-reward' component={SeasonalReward} />
                <Route exact path='/time-sensitive' component={TimeSensitive} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
}

export default App;
