import * as React from 'react';
import Home from './Home/Home';
import PostQuestion from './Question/PostQuestion';
import Questions from './Question/Questions';
import Welcome from './Top/Welcome';
import Register from './Register/Register';;
import { Switch, Route, withRouter } from 'react-router-dom';
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';

interface Props {
  location:any
}

//import createBrowserHistory from 'history/createBrowserHistory';
//const history = createBrowserHistory();

const Router = ({location}:Props) => {
  const current =  location.pathname.split('/')[1] || '';
  // const timeout = { enter: 200, exit: 300 }
  
  return(
    <TransitionGroup>
      <CSSTransition
        in={true}
        timeout={100}
        classNames="fade"
        key={current}
        appear={true}
      >
        <Switch location={location}>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/post" component={PostQuestion} />
          <Route exact path="/questions" component={Questions} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default withRouter(Router);
