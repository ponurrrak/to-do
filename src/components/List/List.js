import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import styles from './List.scss';
import Column from '../Column/Column.js';
import Hero from '../Hero/Hero.js';
import Creator from '../Creator/Creator.js';
import {settings} from '../../data/dataStore.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node,
    columns: PropTypes.array,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  state = {
    columns: this.props.columns || [],
  };

  addColumn(title){
    this.setState(state => (
      {
        columns: [
          ...state.columns,
          {
            key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
            title,
            icon: 'list-alt',
            cards: [],
          },
        ],
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} heroImageURL={this.props.image} heroImageAlt={this.props.imageAlt}/>
        <div className={styles.description}>
          {ReactHtmlParser(this.props.description)}
        </div>
        <div className={styles.columns}>
          {this.state.columns.map(({key, ...columnProps}) => (
            <Column key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.columnCreatorText} action={title => this.addColumn(title)}/>
        </div>
      </section>
    );
  }
}

export default List;
