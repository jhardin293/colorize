import React from 'react';
import styles from './HomeView.scss';
import Isvg from 'react-inlinesvg';

import menu from 'images/menu.svg';
import search from 'images/search.svg';

import Slider from 'react-toolbox/lib/slider';
import app from 'images/app.svg';
import cog from 'images/cogwheel.svg';
import draw from 'images/draw.svg';
import vdots from 'images/vertical-three-dots.svg';

import {Button} from 'react-toolbox/lib/button';
// *---------------------------------------*
//  Google Hangouts
// *---------------------------------------*
class GoogleHangouts extends React.Component {
  render () {
    console.log(styles);
    return (
      <div className={styles.googleHangouts + ' ' + 'md-card'}>
        <Button className={styles.hangoutsButton} floating >
          <Isvg className={styles.draw} src={draw} />
        </Button>
        <div className={styles.title}>
          <div className={styles.menuTitle}>
            <Isvg className={styles.menu} src={menu} />
            <span>Inbox</span>
          </div>
          <div>
            <Isvg src={search} />
          </div>
        </div>
        <div className={styles.media}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li>
            <li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li><li className={styles.listItem}>
              <div className={styles.listContent}>
                <div>
                  <div className={styles.avatar} >
                    <img src='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg'></img>
                  </div>
                </div>
                <div className={styles.itemContent}>
                  <h5>Brendan Lin</h5>
                  <p>I'll be in your neighborhood doing errands this weekend. Do you want to grab brunch?</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

// *---------------------------------------*
//  Twitter Profile
// *---------------------------------------*
class TwitterProfile extends React.Component {
  render () {
    return (
      <div className={styles.TwitterProfile + ' ' + 'md-card'}>
        <div className={styles.menu}>
          <Isvg src={vdots} />
        </div>
        <div className={styles.bg}></div>
        <div className={styles.profile}>
          <div className={styles.avatar}>
            <img src='https://pbs.twimg.com/profile_images/725222227193421824/FvRhAzx2.jpg' />
          </div>
          <p className={styles.name}>Justin Hardin</p>
          <a className={styles.handel}>@jhardin925</a>
          <p className={styles.location}>Oakalnd Ca</p>
        </div>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <p>Tweet</p>
            <h4>12.5k</h4>
          </div>
          <div className={styles.stat}>
            <p>Following</p>
            <h4>793</h4>
          </div>
          <div className={styles.stat}>
            <p>Followers</p>
            <h4>3,187</h4>
          </div>
        </div>
      </div>
    );
  }
}

// *---------------------------------------*
//  Layout Controls
// *---------------------------------------*
class LayoutControles extends React.Component {
  state = {
    slider: 0
  };

  handleChange = (slider, value) => {
    const newState = {};
    newState[slider] = value;
    this.setState(newState);
  };
  render () {
    return (
      <div className={styles.controls}>
        <Isvg src={app} />
        <Isvg src={cog} />
        <Slider min={0} max={10} value={this.state.slider}
          onChange={this.handleChange.bind(this, 'slider')}
          theme={styles}
          />
      </div>
    );
  }
}

export const HomeView = () => (
  <div className='flex-container'>
    <div className='row'>
      <LayoutControles />
    </div>
    <div className='row'>
      <div className='col-sm-1 col-md-4'><GoogleHangouts /></div>
      <div className='col-sm-1 col-md-4'><TwitterProfile /></div>
      <div className='col-sm-1 col-md-4'></div>
    </div>
  </div>
);

export default HomeView;
