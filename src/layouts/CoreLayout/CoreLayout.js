import React from 'react';
import classes from './CoreLayout.scss';
import '../../styles/core.scss';

import Isvg from 'react-inlinesvg';
import {Button} from 'react-toolbox/lib/button';
import {Tab, Tabs} from 'react-toolbox';
import FontIcon from 'react-toolbox/lib/font_icon';
//* ---------------------------------------*
//  Images - Is there a better way?
//* ---------------------------------------*
import search from '../../images/search.svg';
import notification from '../../images/notifications-button.svg';
import expand from '../../images/expand-button.svg';

// *---------------------------------------*
//  Header
// *---------------------------------------*
class Header extends React.Component {
  render () {
    var user = 'Justin Hardin';
    return (
      <header className={classes.header}>
        <Nav />
        <div className={'flex-container' + ' ' + classes.headerContainer}>
          <div className={classes.headerContent}>
            <h1>Dashboard</h1>
            <h5>Welcom back {user}</h5>
          </div>
        </div>
        <NavTabs />
        <div className={classes.mainFabContainer}>
          <div className='flex-container'>
            <Button className={classes.mainFab} floating>
              <FontIcon value='add' className={classes.icon} />
            </Button>
          </div>
        </div>
      </header>
    );
  }
};
//* ---------------------------------------*
//  Nav
//* ---------------------------------------*
class Nav extends React.Component {
  render () {
    let userAvatar = require('../../images/justin-avatar.jpg');
    return (
      <div className='navbar'>
        <div className='flex-container'>
          <nav className={classes.navContainer}>
            <div className={classes.logo}><h3>colorize</h3></div>
            <div className={classes.menuItems}>
              <Isvg src={search} className={classes.menuIcon} />
              <Isvg src={notification} className={classes.menuIcon} />
              <div className={classes.avatarContainer}>
                <div className={classes.userAvatar}><img src={userAvatar} /></div>
                <Isvg className={classes.dropDown} src={expand} />
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
};

// *---------------------------------------*
//  NavTabs
// *---------------------------------------*
class NavTabs extends React.Component {
  state = {
    index: 0
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };
  render () {
    return (
      <div className={classes.navTabs}>
        <div className='flex-container'>
          <Tabs index={this.state.index} onChange={this.handleTabChange} theme={classes}>
            <Tab label='Dashboard' theme={classes} />
            <Tab label='UI Elements' theme={classes} />
            <Tab label='Widgets' theme={classes} />
            <Tab label='Forms' theme={classes} />
            <Tab label='Graphs' theme={classes} />
            <Tab label='Gallery' theme={classes} />
            <Tab label='Maps' theme={classes} />
            <Tab label='Pages' theme={classes} />
            <Tab label='Icons' theme={classes} />
            <Tab label='...' theme={classes} />
          </Tabs>
        </div>
      </div>
    );
  }
};

export const CoreLayout = ({ children }) => (
  <div>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
  </div>
);

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
};

export default CoreLayout;
