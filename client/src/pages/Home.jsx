import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { allLocalData } from '../api/parseServerData';
import { postNewUser } from '../api/server-data';

const Home = () => {

    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '') {
            toast.error('Username cannot be empty')
            return;
        }
        postNewUser(username);
    }

    useEffect(() => {
        const menu = document.getElementsByClassName('navbar-toggler collapsed');

        menu[0].style.cssText += 'display:none';
    }, [])

    return (
        <>
            <main className='App-backMaxHeight'>
                <form className='App-backImg backgroundImg-Home Home-Container' onSubmit={handleSubmit}>
                    <article className='Home-text'>
                        <p>
                            If efficiency is how you play Destiny then you are in the right place! I often find myself spending more time preparing to play Destiny than playing it. There is so much to do and so little time 😞. This app is a Ghost companion to do the thinking for you! Rather than filtering through each page of Seasonal Challenges and Triumphs to know the tourmenting objectives to complete in Gambit this season, this app will simply organize all related Challenges and Triumphs for an activities into one place!
                        </p>
                        <p>
                            So if you are preparing to do your Pinnacle Seasonal Activity challenge you can visit the Activities page and see all the current Seasonal Activitys Seasonal Challenges and Triumphs. This App is not yet connected to the Destiny API, so your challenge progress must be manually updated for now. This is more easy to do in the home page as it will directly match the order seen in the game
                        </p>
                        <p>
                            Enter a Username to get Started. If you have an account, enter your username to Login!
                        </p>

                    </article>
                    <input 
                        type={'text'}
                        name='username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        ></input>
                    <button type='submit' className='Home-button'>Get Started!</button>
                </form>
            </main>
        </>
    );
};

export default Home;
