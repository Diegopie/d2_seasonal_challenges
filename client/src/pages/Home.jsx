import React, { useEffect } from 'react';

const Home = () => {

    

    useEffect(() => {
        const menu = document.getElementsByClassName('navbar-toggler collapsed');

    console.log(menu);

    menu[0].style.cssText += 'display:none';
    }, [])

    return (
        <>
            <main className='App-backMaxHeight'>
                <section className='App-backImg backgroundImg-Home'>
                    
                </section>
            </main>
        </>
    );
};

export default Home;
