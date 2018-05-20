import React from 'react';
import _ from 'lodash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import AppNav from './AppNav';
import * as api from './stubAPI/stubGamesAPI';
import GamesList from './GamesList'
import SelectionBox from'./SelectionBox'


class GamesMain extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      search: '',
      sort: 'name',
      games: [{}],
      loading : true
    };
  }

  handleChange = (type, value) => {
    if (type === 'search') {
      this.setState({ search: value });
    } else {
      this.setState({ sort: value });
    }
  };

  async componentDidMount () {
    const resp = await api.getAll();
    setTimeout(() => this.setState({
      games: resp,
      loading: false
    }), 1000);
};

buildSpinner() {
  return (
    <img align="center" className="card-img-top" src="/Images/loading.gif" alt="Loading" />
  )
}




  render() {
    if (this.state.loading) {
      return this.buildSpinner();
    }
    console.log('games: ', this.state.games);
    
    let games = this.state.games.filter((game) => game.name.toLowerCase().includes(this.state.search.toLowerCase()));

    let filteredList = _.sortBy(games, this.state.sort);
    return (
      <div>
        <AppNav />
        <div className="container-fluid">
          <div className="row">
            <SelectionBox onUserInput={this.handleChange}
              filterText={this.state.search}
              sort={this.state.sort} />
              <br />
            <GamesList games={filteredList} />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(GamesMain);
