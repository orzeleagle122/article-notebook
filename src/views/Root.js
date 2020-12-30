import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import MainTemplate from '../templates/MainTemplete';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';

const Root = () => {
  return ( 
    <Router>
      <MainTemplate>
      
        <Switch>
          <Route exact path="/" component={Notes}/>
          <Route path="/articles" component={Articles}/>
          <Route path="/twitters" component={Twitters}/>
        </Switch>
      
      </MainTemplate>
    </Router>
   );
}
 
export default Root;
