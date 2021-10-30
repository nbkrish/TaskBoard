import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import React from 'react';
import { BiMenu } from 'react-icons/bi';
import _ from 'lodash';
import NavItem from './Partials/NavItem';
import Spaces from './Spaces';
import Sidebar from './Partials/Sidebar';

const NavData = {
  Spaces: '/spaces',
  'my tasks': 'b',
  'my notes': 'c',
  more: 'd',
};

const MainNav = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  let SideNav = window.location.pathname === '/' ? null : <Sidebar />;
  return (
    <div className="flex">
      <div>{SideNav}</div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/spaces" component={Spaces} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default MainNav;
