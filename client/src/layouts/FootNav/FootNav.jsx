import './FootNav.css';
import DropUpMenu from './components/DropUpMenu';

const FootNav = (props) => {

  const handleClick = (menu) => {
    const target = document.getElementById(menu)
    console.log(target.dataset.show);

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
          <button className='FootNav-NavItem App-Button' onClick={() => { handleClick('dropUp') }}>Categories</button>
          <button className='App-Button'>Page</button>
          <button className='App-Button'>Tracked</button>
        </nav>
        <DropUpMenu />
      </article>
    </section>
  );
};

export default FootNav;