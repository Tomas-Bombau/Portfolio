import s from './Header.module.css'

const Header = () => {


  return (
    <nav className={s.navBar}>
      <div className={s.navTags}>
        <ul>
        <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
