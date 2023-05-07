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
    const menus = document.getElementsByClassName('FootNav-DropUp-Container');
    let isSameMenu = false;

    // * Close Any Open Menus
    for (let i = 0; i < menus.length; i++) {
      const thisMenu = menus[i]
      const id = thisMenu.id;
      let menuState = thisMenu.dataset.show;
      if (menuState === 'true') {
        // If the menu that was clicked is already open, change isSameMenu so we can end the function before the menu opens again
        if (id === menu) {
          isSameMenu = true;
        }
        thisMenu.dataset.show = 'false';
        thisMenu.classList.remove(`FootNav-${id}-ShowContainer`);
        // disable scrolling 
        document.body.classList.remove('App-scrollLock');
      }
    }

    if (isSameMenu) {
      return;
    }

    if (target.dataset.show === 'false') {
      target.classList.add(className);
      target.dataset.show = 'true'
      document.body.classList.add('App-scrollLock');
    }
  }

  return (
    <section className='FootNav-Wrapper'>
      <article className='FootNav-Container'>

        <nav className='FootNav-Body'>
          <button className='App-Button FootNav-Button' onClick={() => { handleClick('DropUp') }}>Categories</button>
          <button className='App-Button FootNav-Button'><a href='#NavBar'>Top</a></button>
          <button className='App-Button FootNav-Button' onClick={() => { handleClick('Info') }}>Info</button>
          {/* <button className='App-Button FootNav-Button'>Tracked</button> */}
        </nav>
        <DropUpMenu
          handleClick={handleClick}
          menu='DropUp'
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