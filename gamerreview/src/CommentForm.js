import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import session from './sessionCache';
import * as api from './stubAPI/stubCommentsAPI';



export default class CommentForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      gameID:this.props.gameID,
      username: session.getUser(),
      text: ""
    };
  }

  handleChange (event)  {
    console.log('comment form handleChange>>', event)
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  validateForm() {
    return this.state.text.length > 0;
  }

  async handleAddComment(event){
    let {gameID, username, text} = this.state;
    console.log(gameID,username, text );
    await api.add(gameID, username, text);
    this.props.onSave({gameID:gameID, username:username, text:text})
      this.setState({
        gameID:this.props.gameID,
        username: session.getUser(),
        text: ""
      })     
  }



  render() {
    return (   
      <div className="row">
        <div className="Comment">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="text" bsSize="large">
              <ControlLabel>Comment</ControlLabel>
              <FormControl
                autoFocus
                value={this.state.text}
                onChange={this.handleChange.bind(this)}
              />
            </FormGroup>
            <Button
              block
              bsSize="large"
              disabled={!this.validateForm()}
              onClick={this.handleAddComment.bind(this)}
            >
              Add
            </Button>
          </form>       
        </div>
      </div>
    );
  }
}

