import React from 'react';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import styles from './Search.scss';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';

class Search extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  }

  state = {
    value: '',
    visibleButtons: false,
  }

  handleChange(event){
    this.setState({
      value: event.target.value,
      visibleButtons: event.target.value.length > 0,
    });
  }

  handleOK(){    
    this.props.history.push(`/search/${this.state.value}`);
  }

  render() {
    const text = settings.search.defaultText;
    const {value} = this.state;
    const {icon} = settings.search;
    return (
      <div className={styles.component}>
        <input
          type='text'
          placeholder={text}
          value={value}
          onChange={event => this.handleChange(event)}
        />
        <div className={styles.buttons}>
          <Button onClick={() => this.handleOK()}><Icon name={icon} /></Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Search);
