import { useState } from 'react';
import './FootNav.css';
import DropUpMenu from './components/DropUpMenu';
import Info from './components/Info';

const FootNav = (props) => {

  const [showInfo, setShowInfo] = useState(false);

  if (window.location.pathname === '/') {
    return null;
  }


  const handleClick = (menu) => {
    const target = document.getElementById(menu);
    const className = `FootNav-${menu}-ShowContainer`;

    if (target.dataset.show === 'false') {
      target.classList.add(className);
      target.dataset.show = 'true'
    } else {
      target.classList.remove(className);
      target.dataset.show = 'false';
    }
  }

  return (
    <section className='FootNav-Wrapper'>
      <article className='FootNav-Container'>

        <nav className='FootNav-Body'>
          <button className='App-Button FootNav-Button' onClick={() => { handleClick('DropUp') }}>Categories</button>
          <button className='App-Button FootNav-Button'><a href='#NavBar'>Top</a></button>
          <button className='App-Button FootNav-Button' onClick={() => { handleClick('Info') }}>Top</button>
          {/* <button className='App-Button FootNav-Button'>Tracked</button> */}
        </nav>
        <DropUpMenu
          handleClick={handleClick}
          menu='dropUp'
        />
        <Info 
          showInfo={showInfo}
          setShowInfo={setShowInfo}
        />
      </article>
    </section>
  );
};

export default FootNav;