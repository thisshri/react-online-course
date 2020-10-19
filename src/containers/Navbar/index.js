import React from 'react'

import Leaderboard from 'static/leaderboard.svg';
import CampK12Logo from 'static/camp-k-12-logo.svg';

import './styles.scss';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <img src={CampK12Logo} alt="Camp K12 Logo" />
      </li>
      <li>
        Online Courses
        <hr/>
      </li>
      <li>
        Offline Camps
        <hr/>
      </li>
      <li>
        Refer & Earn
        <hr/>
      </li>
    </ul>
    <div>
      <button className="leaderboard">
        <img alt="" role="button" src={Leaderboard} />
      </button>
      <button>
        Free Trial
      </button>
      <button>
        Log In
      </button>
    </div>
  </nav>
)

export default Navbar;
