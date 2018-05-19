import React from 'react';
import './App.css';
import GameItem from './GameItem'

export default class GamesList extends React.Component {
  render() {
    let displayedGames = this.props.games.map((g) =>
        <GameItem key={g.id} game={g} />
    );
    
    return (
      <div className="card-group">
        {displayedGames}
      </div>
      
    );
  }
}

