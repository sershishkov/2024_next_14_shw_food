import Link from 'next/link';
import Image from 'next/image';

import MainHeaderBackground from './mainHeaderBackground';
import NavLink from './navLink';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href='/' className={classes.logo}>
          <Image src={logoImg} alt='A plate with food on it' priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href='/meals'>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href='/community'>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
