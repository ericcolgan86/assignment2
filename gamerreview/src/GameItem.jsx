import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default class GameItem extends React.Component {
  render() {
    let g = this.props.game;
    console.log(g.imageurlsmall);
    return (
      <div className="card">
        <Link to={'/games/' + g.id}>
          <img className="card-img-top" src={g.imageurlsmall} alt={g.name}/>
        </Link>
          <div className="card-body">
            <h5 className="card-title">{g.name}</h5>
            <p className="card-text"><small className="text-muted">Rating:{g.rating}</small></p>
          </div>
      </div>
    )
  }
}

