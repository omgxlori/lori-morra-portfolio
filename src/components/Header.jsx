import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export default Header;
