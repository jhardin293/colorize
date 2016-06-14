var React = window.React = require('react'),
    ReactDOM = require("react-dom"),
    Timer = require("./ui/Timer"),
    mountNode = document.getElementById("app"),
    Isvg = require('react-inlinesvg');

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import Slider from 'material-ui/Slider';

injectTapEventPlugin();


var Tod= React.createClass({
  render: function() {
    var createItem = function(itemText) {
      return <li>{itemText}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});

var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <Todo items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <Timer />
      </div>
    );
  }
});


//*---------------------------------------*
//  Nav 
//*---------------------------------------*
class Nav extends React.Component {
  render() {
    let userAvatar = "images/justin-avatar.jpg";
    return (
      <div className="navbar">
       <div className="flex-container">
          <nav className="nav-container">
            <div className="logo"><h3>colorize</h3></div>
            <div className="menu-items">
              <Isvg src="images/search.svg" className="menu-icon"></Isvg>
              <Isvg src="images/notifications-button.svg" className="menu-icon"></Isvg>
              <div className="avatar-container">
                <div className="user-avatar"><img src={userAvatar}/></div>
                <Isvg className="drop-down" src="images/expand-button.svg" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    )
  }
};

//*---------------------------------------*
//  layoutControls 
//*---------------------------------------*
class LayoutControls extends React.Component {
  render() {
    let style = {
      slider: {
        margin: 0
      }
    };
    return (
      <div className="flex-container">
        <div className="layout-controls">
          <Isvg src="images/app.svg" className="control"></Isvg>
          <Isvg src="images/cogwheel.svg" className="control"></Isvg>
          <Slider className="layout-slider" style={style.slider} defaultValue={0.5}/>
        </div>
      </div>
    );
  }
};

//*---------------------------------------*
//  NavTabs 
//*---------------------------------------*
class NavTabs extends React.Component {
  render() {
    return(
      <div className="nav-tabs">
        <div className="flex-container">
          <Tabs className="tab-container">
            <Tab label="Dashboard" >
            </Tab>
            <Tab label="UI Elements" >
            </Tab>
            <Tab label="Widgets">
            </Tab>
            <Tab label="Forms">
            </Tab>
            <Tab label="Graphs">
            </Tab>
            <Tab label="Gallery">
            </Tab>
            <Tab label="Maps">
            </Tab>
            <Tab label="Pages">
            </Tab>
            <Tab label="Icons">
            </Tab>
            <Tab label="...">
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }
};

//*---------------------------------------*
//  Header
//*---------------------------------------*
class Header extends React.Component {
  render() {
    var user = 'Justin Hardin';
    return (
      <header className="header">
        <Nav />
        <div className="flex-container header-container">
          <div className="header-content">
            <h1>Dashboard</h1>
            <h5>Welcom back {user}</h5>
          </div>
        </div>
        <NavTabs/>
        <div className="main-fab-container">
          <div className="flex-container">
            <FloatingActionButton className="main-fab"secondary={true}>
              <ContentAdd />
            </FloatingActionButton>
          </div>
        </div>
      </header>
    )  
  }
};

//*---------------------------------------*
//  App
//*---------------------------------------*
class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <Header />
          <LayoutControls />
        </div>
      </MuiThemeProvider>
    )
  }
};


ReactDOM.render(<App />, mountNode);

