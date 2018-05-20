import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withRouter } from 'react-router-dom';
import AppNav from './AppNav';
import * as api from './stubAPI/stubGamesAPI';
import session from './sessionCache';
import * as commentapi from './stubAPI/stubCommentsAPI';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

class GamesDetail extends React.Component {
  constructor(props) {
    super(props)
    let params = props.match.params
    this.state = {
      id: params.id,
      gameName: null,
      gameDescription: null,
      gameImage: null,
      gameRating: null,
      gameReview: null,
      loading: true
    }
  }

  async componentDidMount() {
    console.log('>> component just mounted GAMES DETAIL');
    const resp = await api.getByID(this.state.id);
    const respComments = await commentapi.getByID(this.state.id);
    let orderedComments = respComments.comments.slice().reverse();
    console.log('>> gamename' + resp.name);
    console.log('>> Image' + resp.imageurlbig);

    // just have setTimeout here to simulate loading time
    setTimeout(() => this.setState({
      gameName: resp.game.name,
      gameDescription: resp.game.description,
      gameImage: resp.game.imageurlbig,
      gameRating: resp.game.rating,
      gameReview: resp.game.reviewurl,
      loading: false,
      comments: orderedComments
    }), 1000);
  };


  buildSpinner() {
    return (
      <img align="center" className="card-img-top" src="/Images/loading.gif" alt="Loading" />
    )
  }

  handleSave(comment) {
    //let updatedComments = this.state.comments.concat(comment)
    let updatedComments = [comment, ...this.state.comments];
    this.setState({
      comments: updatedComments
    })
  }

  buildCommentForm() {
    let form
    if (session.getUser() !== null) {
      form = <CommentForm gameID={this.state.id} onSave={this.handleSave.bind(this)} />
    }
    return form
  }
  buildContent() {
    console.log('>> gamename', this.state);
    let comments = this.state.comments.map((c) =>
      <CommentItem key={c._id} comment={c} />
    );
    let item = (
      <div>
        <div className="card">
          <img className="card-img-top" src={this.state.gameImage} alt={this.state.gameName} />
          <div className="card-body">
            <h5 className="card-title">{this.state.gameName}</h5>
            <p className="card-text">{this.state.gameDescription}</p>
            <p className="card-text"><small className="text-muted">Rating:{this.state.gameRating}</small></p>
          </div>
          <div className="row">
            <iframe title={this.state.gameName} align="center" width="854" height="480" src={this.state.gameReview} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          {this.buildCommentForm()}
          <div className="row">
            {comments}
          </div>
        </div>
      </div>
    );
    return (
      <div className="container-fluid" align="center"> {item}</div>

    )
  }

  render() {
    console.log('>> in render');
    let content

    if (this.state.loading) {
      content = this.buildSpinner()
    } else {
      content = this.buildContent()
    }

    return (
      <div className="container-fluid">
        <AppNav />
        {content}
      </div>

    );
  }
}

export default withRouter(GamesDetail);
