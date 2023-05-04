import './FootNav.css';
import Coffee from './components/Coffee';
import DropUpMenu from './components/DropUpMenu';

const FootNav = (props) => {

  if (window.location.pathname === '/') {
    return null;
  }

  const handleClick = (menu) => {
    const target = document.getElementById(menu);

    if (target.dataset.show === 'false') {
      target.classList.add('FootNav-DropUp-ShowContainer');
      target.dataset.show = 'true'
    } else {
      target.classList.remove('FootNav-DropUp-ShowContainer');
      target.dataset.show = 'false';
    }
  }

  return (
    <section className='FootNav-Wrapper'>
      <article className='FootNav-Container'>

        <nav className='FootNav-Body'>
          <button className='App-Button FootNav-Button' onClick={() => { handleClick('dropUp') }}>Categories</button>
          <button className='App-Button FootNav-Button'><a href='#NavBar'>Top</a></button>
          {/* <button className='App-Button FootNav-Button'>Tracked</button> */}
        </nav>
        <DropUpMenu 
          handleClick={handleClick}
          menu='dropUp'
        />
      </article>
    </section>
  );
};

export default FootNav;