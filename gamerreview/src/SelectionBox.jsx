import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class SelectBox extends React.Component {
  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };

  handleTextChange = (e) => {
    this.handleChange(e, 'search', e.target.value);
  };

  handleSortChange = (e) => {
    this.handleChange(e, 'sort', e.target.value);
  };

  render() {
    return (
      <div className="selection-box">
        <input type="text" placeholder="Search"
          value={this.props.filterText}
          onChange={this.handleTextChange} />
        <span> Sort by: </span>
        <select id="sort" value={this.props.order}
          onChange={this.handleSortChange} >
          <option value="name">Alphabetical</option>
          <option value="rating">Rating</option>
        </select>
      </div>
    );
  }
}

