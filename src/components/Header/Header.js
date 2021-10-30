import React from 'react';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Container from '../Container/Container.js';
import Icon from '../Icon/Icon.js';
import Search from '../Search/Search.js';
import {settings, infoContent, faqContent} from '../../data/dataStore.js';

class Header extends React.Component {
  render() {
    return (
      <header className={styles.component}>
        <Container>
          <Search/>
          <div className={styles.wrapper}>
            <Link to='/' className={styles.logo}>
              <Icon name={settings.headerLogoIcon}/>
            </Link>
            <nav>
              <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              <NavLink exact to='/info' activeClassName='active'>{infoContent.title}</NavLink>
              <NavLink exact to='/faq' activeClassName='active'>{faqContent.title}</NavLink>
            </nav>
          </div>          
        </Container>
      </header>
    );
  }
}

export default Header;
