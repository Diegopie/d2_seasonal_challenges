import React from 'react';
import Intro from '../components/Intro/Intro';
import TriumphTracker from '../features/TriumphTracker/template/TriumphTracker';


const Homepage = () => {

    return (
        <main className='App-backMaxHeight'>
            {/* <Intro /> */}
            <TriumphTracker />
        </main>
    );
};

export default Homepage;
