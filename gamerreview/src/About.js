import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNav from './AppNav';

class About extends React.Component {
  render() {
    return (
      <div>
        <AppNav />
        <div className="container-fluid" align="centre">
          About
        </div>
      </div>
    );
  }
}
export default About;
