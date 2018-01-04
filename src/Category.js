import React, { Component } from 'react';
import Book from './Book';

export default class Category extends Component {
  render() {
    let category_title = Object.keys(this.props.category)[0];
    return (
      <li>
        <div className="collapsible-header">
          {category_title}
        </div>
        <div className="collapsible-body">
          <ul className="collection">
            {this.props.category[category_title].map(book => <Book key={book.sku} book={book} />)}
          </ul>
        </div>
      </li>
    );
  }
}
