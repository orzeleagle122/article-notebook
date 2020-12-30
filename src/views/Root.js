import React from 'react';
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import MainTemplate from '../templates/MainTemplete';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';

const Root = () => {
  return ( 
    <Router>
      <MainTemplate>
      
        <Switch>
          <Route exact path="/" render={()=><Redirect to="/notes" />} />
          <Route exact path="/notes" component={Notes}/>
          <Route path="/notes/:id" component={DetailsPage}/>
          <Route exact path="/articles" component={Articles}/>
          <Route path="/articles/:id" component={DetailsPage}/>
          <Route exact path="/twitters" component={Twitters}/>
          <Route path="/twitters/:id" component={DetailsPage}/>
        </Switch>
      
      </MainTemplate>
    </Router>
   );
}
 
export default Root;
