import React from 'react';
import NotFound from '../components/NotFound'

const Homepage = () => {

    document.location.href = '/weekly';
    
    return (
        <main className='App-backMaxHeight'>
            <NotFound />
        </main>
    );
};

export default Homepage;
