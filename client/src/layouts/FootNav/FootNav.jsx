import './FootNav.css';

const FootNav = (props) => {

console.log('work?');

  return (
    <section className='FootNav-Wrapper'>
      <article className='FootNav-Container'>

      <nav className='FootNav-Body'>
        <button className='FootNav-NavItem App-Button'>Dropdown</button>
        <button className='App-Button'>Page</button>
        <button className='App-Button'>Tracked</button>
      </nav>
      </article>
    </section>
  );
};

export default FootNav;