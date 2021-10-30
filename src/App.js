import React, { useEffect } from 'react';
import {
  Switch,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home';
import Mentors from './pages/Mentors';
import Sponsors from './pages/Sponsors';

import NotFound from './pages/NotFound'

function App() {

  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about/mentors" component={Mentors} />
        <Route exact path="/about/sponsors" component={Sponsors} />

        {/* social medias */}
        <Route path='/twitter' component={() => { 
          window.location.href = 'https://twitter.com/7419Tech'; 
          return null;
        }}/>
        <Route path='/instagram' component={() => { 
          window.location.href = 'https://www.instagram.com/7419tech/'; 
          return null;
        }}/>
        <Route path='/facebook' component={() => {
          window.location.href = 'https://www.facebook.com/7419-Tech-Support-FRC-1907516719310109/';
          return null;
        }}/>
        <Route path='/reddit' component={() => {
          window.location.href = 'https://old.reddit.com/user/7419Tech/';
          return null;
        }}/>
        <Route component={NotFound} />

      </Switch>
    </>
  );
}

export default App;
