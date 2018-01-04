import React, { Component } from 'react';

export default class Book extends Component {
  render() {
    const { title, sku, author } = this.props.book;
    return (
      <li className="collection-item book">
        {`(${sku}) ${title} | ${author}`}
      </li>
    );
  }
}
