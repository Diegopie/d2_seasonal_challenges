import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = (props) => {


    return (
        <section className={`App-backImg backgroundImg-Weekly`}>
            <article className='App-FlexCenter'>
                <article className=''>
                    <h1 className='App-dropShadow'>
                        Page Not Found 🤯
                    </h1>
                    {/* <img
                        className='Intro-mainPhoto Intro-margin'
                        src='/assets/img/main-img-light.jpg'
                        alt='me xD'
                    /> */}
                    <section className='MyProjects-all'>
                        <Link to='/weekly'>
                            <button className='App-Button'>Return Home</button>
                        </Link>
                    </section>
                </article>
            </article>
        </section>
    );
};

export default NotFound;