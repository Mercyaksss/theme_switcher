import './App.css';
import facebook from './images/icon-facebook.svg';
import instagram from './images/icon-instagram.svg';
import twitter from './images/icon-twitter.svg';
import youtube from './images/icon-youtube.svg';
import up from './images/icon-up.svg';
import down from './images/icon-down.svg';
import { useState } from 'react';

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  const handles = [
    { icon: facebook, user: '@nathanf', followers: '1987', label: 'FOLLOWERS', text: '12 Today', platform: 'facebook', icon2: up },
    { icon: twitter, user: '@nathanf', followers: '1044', label: 'FOLLOWERS', text: '99 Today', platform: 'twitter', icon2: up },
    { icon: instagram, user: '@realnathanf', followers: '11k', label: 'FOLLOWERS', text: '1099 Today', platform: 'instagram', icon2: up },
    { icon: youtube, user: 'Nathan F.', followers: '8239', label: 'SUBSCRIBERS', text: '144 Today', platform: 'youtube', icon2: down },
  ];

  const overviews = [
    { text: 'Page Views', icon: facebook, number: '87', icon2: up, small: '3%', direction: 'up' },
    { text: 'Likes', icon: facebook, number: '52', icon2: down, small: '2%', direction: 'down' },
    { text: 'Likes', icon: instagram, number: '5462', icon2: up, small: '2257%', direction: 'up' },
    { text: 'Page Views', icon: instagram, number: '52k', icon2: up, small: '1375%', direction: 'up' },
    { text: 'Retweets', icon: twitter, number: '117', icon2: up, small: '303%', direction: 'up' },
    { text: 'Likes', icon: twitter, number: '507', icon2: up, small: '553%', direction: 'up' },
    { text: 'Likes', icon: youtube, number: '107', icon2: down, small: '19%', direction: 'down' },
    { text: 'Total Views', icon: youtube, number: '1407', icon2: down, small: '12%', direction: 'down' },
  ];

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
    document.body.className = isLightMode ? 'light-mode' : '';
  };

  return (
    <div className={`App ${isLightMode ? 'light-mode' : ''}`}>
      <div className="upper"></div>
      <section className="main">
        <nav className="nav">
          <div className="nav-left">
            <h1>Social Media Dashboard</h1>
            <p>Total followers: 23,004</p>
            <div className='line'></div>
          </div>
          <div className="nav-right">
            <p>Dark Mode</p>
            <input
              type="checkbox"
              checked={isLightMode}
              onChange={toggleTheme}
            />
          </div>
        </nav>

        <div className="social-container">
          {handles.map((handle, index) => (
            <div key={index} className={`social-card ${handle.platform}`}>
              <div className="platform">
                <img src={handle.icon} alt={`${handle.user} icon`} className="social-icon" />
                <p>{handle.user}</p>
              </div>
              <div className="followers">
                <h1>{handle.followers}</h1>
                <p>{handle.label}</p>
              </div>
              <p className={`small-text ${handle.platform}`}>
                <img src={handle.icon2} alt="trend icon" />
                {handle.text}
              </p>
            </div>
          ))}
        </div>
        <div className="overview-section">
          <h2>Overview - Today</h2>

          <div className="overview">
            {overviews.map((overview, index) => (
              <div className="overview-card" key={index}>
                <div className="child-1">
                  <p>{overview.text}</p>
                  <img src={overview.icon} className="icon" alt="platform icon" />
                </div>
                <div className="child-2">
                  <h2>{overview.number}</h2>
                  <p className={`small ${overview.direction}`}>
                    <img src={overview.icon2} alt="trend icon" />
                    {overview.small}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
