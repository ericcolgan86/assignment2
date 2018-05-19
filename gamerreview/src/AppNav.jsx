import React from 'react';
import { Navbar } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import session from './sessionCache';

class AppNav extends React.Component {

  displayLogout() {
    console.log(">> displayLogout called", session.getSession())
    let info
    if (session.getSession()) {
      info = (
        <li>
          <NavLink to="/">Log Out</NavLink>
        </li>
      )
    }
    else {
      info = (
        <li>
          <NavLink to="/">Log In</NavLink>
        </li>
      )
    }
    return info
  }

  displayUser() {
    let info
    if (session.getSession()) {
      info = (
        <li>
          {session.getUser()}
        </li>
      )
    }
    return info
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            Gamer-Review
          </Navbar.Brand>
        </Navbar.Header>
        <div className="links-navbar-div">
          <div className="btn-nav">
            <ul className="nav navbar-nav navbar-right">
            {this.displayUser()}
              {this.displayLogout()}
              <li>
                <NavLink to="/games">Games</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>

            </ul>
          </div>
        </div>
      </Navbar>
    );
  }
}



export default withRouter(AppNav);
