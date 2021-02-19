import React from 'react';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Switch, Route,Redirect} from 'react-router-dom'
import MainTemplate from '../templates/MainTemplete';
import Notes from './Notes';
import Articles from './Articles';
import Twitters from './Twitters';
import DetailsPage from './DetailsPage';
import {routers} from '../router/index';
import store from '../store/index';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

const Root = () => {
  return ( 
    <Provider store={store}>
      <Router>
        <MainTemplate>        
          <Switch>
            <Route exact path={routers.home} render={()=><Redirect to="/notes" />} />
            <Route exact path={routers.notes} component={Notes}/>
            <Route path={routers.note} component={DetailsPage}/>
            <Route exact path={routers.articles} component={Articles}/>
            <Route path={routers.article} component={DetailsPage}/>
            <Route exact path={routers.twitters} component={Twitters}/>
            <Route path={routers.twitter} component={DetailsPage}/>
            <Route path={routers.login} component={LoginPage}/>
            <Route path={routers.register} component={RegisterPage}/>
          </Switch>        
        </MainTemplate>
      </Router>
    </Provider>
   );
}
 
export default Root;
