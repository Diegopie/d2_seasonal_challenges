import './FootNav.css';
import DropUpMenu from './components/DropUpMenu';

const FootNav = (props) => {

  return (
    <section className='FootNav-Wrapper'>
      <article className='FootNav-Container'>

        <nav className='FootNav-Body'>
          <button className='FootNav-NavItem App-Button'>Dropdown</button>
          <button className='App-Button'>Page</button>
          <button className='App-Button'>Tracked</button>
        </nav>
        <DropUpMenu />
      </article>
    </section>
  );
};

export default FootNav;