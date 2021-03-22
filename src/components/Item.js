import React, { Component } from 'react';
import './Item.css';

class Item extends Component {
  onRemove = () => {
    const { item: { id }, onRemove } = this.props;
    onRemove(id);
  }

  onCheck = () => {
    const { item: { id }, onCheck } = this.props;
    onCheck(id);    
  }
  render() {
    const { item } = this.props;
    return (
      <article className="Item">
        <label htmlFor={item.id}>
          <input
            type="checkbox"
            checked={item.packed}
            onChange={this.onCheck}
            id={item.id}
          />
          {item.value}
        </label>
        <button className="Item-remove" onClick={this.onRemove}>
          Remove
        </button>
      </article>
    );
  }
}

export default Item;
