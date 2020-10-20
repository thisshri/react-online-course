import React from 'react'

import Leaderboard from 'static/leaderboard.svg';
import CampK12Logo from 'static/camp-k-12-logo.svg';

import './styles.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <img src={CampK12Logo} alt="Camp K12 Logo" />
      </li>
      <li>
        <NavLink to="online-courses" activeClassName="selected">
            Online Courses
        </NavLink>
        <div />
      </li>
      <li>
        <NavLink to="offline-camp" activeClassName="selected">
          Offline Camps
        </NavLink>
        <div />
      </li>
      <li>
        <NavLink to="refer-n-earn" activeClassName="selected">
          Refer & Earn
        </NavLink>
        <div />
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
