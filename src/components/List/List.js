import React from 'react';
import styles from './List.scss';
import Column from '../Column/Column.js';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    children: PropTypes.node.isRequired,
    imageURL: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImageURL={this.props.imageURL} heroImageAlt={this.props.imageAlt}/>
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnTitle='Animals'/>
          <Column columnTitle='Plants'/>
          <Column columnTitle='Minerals'/>
        </div>
      </section>
    )
  }
}

export default List;
