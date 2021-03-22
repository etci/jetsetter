import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';

import './Application.css';

const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    items: [...defaultState]
  };

  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  addItem = (item) => {
    const { items } = this.state;
    this.setState({ 
      items: [
        ...items,
        item
      ] 
    });
  }

  removeItem = (id) => {
    const { items } = this.state;
    const newItems = items.filter(({ id: itemId }) => itemId !== id).map(item => ({ ...item }));
    this.setState({
      items: newItems
    })
  }

  toggleCheck = (id) => {
    const { items } = this.state;
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    this.setState({ items: newItems });
  }

  markAllAsUnpacked = () => {
    const { items } = this.state;
    const newItems = items.map(item => {
      return {
        ...item,
        packed: false
      };
    });
    this.setState({
      items: newItems
    });
  }

  render() {
    const { items } = this.state;
    const unpackedItems = items.filter(({ packed }) => !packed);
    const packedItems = items.filter(({ packed }) => packed);
    return (
      <div className="Application">
        <NewItem onSubmit={this.addItem} />
        <Items onRemove={this.removeItem} onCheck={this.toggleCheck} title="Unpacked Items" items={unpackedItems} />
        <CountDown />
        <Items title="Packed Items" items={packedItems} onRemove={this.removeItem} onCheck={this.toggleCheck} />
        <button className="button full-width" onClick={this.markAllAsUnpacked}>Mark All As Unpacked</button>
      </div>
    );
  }
}

export default Application;
