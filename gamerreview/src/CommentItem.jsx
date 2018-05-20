import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class CommentItem extends React.Component {
  render() {
    let c = this.props.comment;
    console.log(c.text);
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <hr/>
          {c.username}: <br/>
          {c.text}
          <hr/>
        </div>
      </div>
    )
  }
}

