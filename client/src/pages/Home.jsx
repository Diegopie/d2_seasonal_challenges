import React, { useState } from 'react';
import { postNewUser } from '../api/server-data';
import './Page.css'
import { toast } from 'react-toastify';

const Home = () => {

    const auth = localStorage.getItem('username');
    if (auth) {
        document.location.href = '/weekly';
    }

    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === '') {
            toast.error('Username cannot be empty')
            return;
        }
        postNewUser(username);
    }

    return (
        <main className='App-backMaxHeight'>
            <div className='App-backImg backgroundImg-Home ' onSubmit={handleSubmit}>
                <section className='Home-Container'>
                    <h1 className='Home-text Home-Title'>Destiny 2 Seasonal Challenges</h1>
                    <article className='Home-text'>
                        <p>
                            If efficiency is how you play Destiny then you are in the right place! I often find myself spending more time preparing to play Destiny than playing it. There is so much to do and so little time 😞. This app is a Ghost companion to do the thinking for you! Rather than filtering through each page of Seasonal Challenges and Triumphs to know the tormenting objectives to complete in Gambit this season, this app will simply organize all related Challenges and Triumphs for an activity into one place!
                        </p>

                    </article>
                    <iframe className='iFrame' src="https://www.youtube.com/embed/V9efg5dKPOY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </section>
                <form className='Home-Container mt-4'>
                    <p className='Form-text'>
                        Enter a Username to get Started. If you have an account, enter your username to Login!
                    </p>
                    <input
                        type={'text'}
                        name='d2Challenges-username'
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    ></input>
                    <button type='submit' className='Home-button'>Get Started!</button>
                </form>
            </div>
        </main>
    );
};

export default Home;
