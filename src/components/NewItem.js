import { uniqueId } from 'lodash-es';
import React, { Component } from 'react';
import './NewItem.css';


class NewItem extends Component {
  state = { value: '' };

  handleChange = event => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    const { onSubmit } = this.props;
    const { value } = this.state;

    event.preventDefault();
    onSubmit({ value, id: uniqueId(), packed: false });  
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <form className="NewItem" onSubmit={this.handleSubmit}>
        <input
          className="NewItem-input"
          type="text"
          value={value}
          onChange={this.handleChange}
        />
        <input className="NewItem-submit button" type="submit" />
      </form>
    );
  }
}

export default NewItem;
