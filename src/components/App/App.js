import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import styles from './App.scss';
import Home from '../Home/HomeContainer.js';
import List from '../List/ListContainer';
import Info from '../Info/Info.js';
import Faq from '../Faq/Faq.js';
import SearchResults from '../SearchResults/SearchResultsContainer.js';
import MainLayout from '../MainLayout/MainLayout.js';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <AnimatedSwitch
        atEnter={{ opacity: 0 }}
        atLeave={{ opacity: 0 }}
        atActive={{ opacity: 1 }}
        className={styles.switchWrapper}
      >
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path="/list/:id" component={List} />
        <Route exact path="/search/:searchString" component={SearchResults} />
      </AnimatedSwitch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
