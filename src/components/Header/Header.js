import React from 'react';
import { IndexLink, Link } from 'react-router';
import classes from './Header.scss';

import { Button } from 'react-toolbox/lib/button';
import {Tab, Tabs} from 'react-toolbox';
import justin from '../../images/justin-avatar.jpg';

class TabsTest extends React.Component {
  state = {
    index: 1
  };

  handleTabChange = (index) => {
    this.setState({index});
  };

  handleActive = () => {
    console.log('Special one activated');
  };

  render () {
    return (
      <Tabs index={this.state.index} onChange={this.handleTabChange} theme={classes}>
        <Tab label='Primary'><small>Primary content</small></Tab>
        <Tab label='Secondary' onActive={this.handleActive}><small>Secondary content</small></Tab>
        <Tab label='Third' disabled><small>Disabled content</small></Tab>
        <Tab label='Fourth' hidden><small>Fourth content hidden</small></Tab>
        <Tab label='Fifth'><small>Fifth content</small></Tab>
      </Tabs>
    );
  }
}

export const Header = () => (
  <div>
    <h1>React Redux Starter Kit test</h1>
    <img src={justin} alt='' />
    <Button label='Hello World!' />
    <Button icon='add' theme={classes} floating accent mini />
    <TabsTest />
    <IndexLink to='/' activeClassName={classes.activeRoute}>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName={classes.activeRoute}>
      Counter
    </Link>
  </div>
);

export default Header;
