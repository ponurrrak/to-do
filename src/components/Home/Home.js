import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink.js';

class Home extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node.isRequired,
    lists: PropTypes.array.isRequired,
  };
  render() {
    const {title, subtitle, lists} = this.props;
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        {lists.map(listData => (
          <ListLink key={listData.id} {...listData}/>
        ))}        
      </main>
    );
  }
}

export default Home;
