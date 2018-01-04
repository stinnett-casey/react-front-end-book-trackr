import React, { Component } from 'react';
import { Collapsible, CollapsibleItem, Collection, CollectionItem } from 'react-materialize';
import Category from './Category';

export default class BookList extends Component {
  render() {
    return (
      <div className="all-books">
        <ul className="collapsible collection with-header">
          <li className="collection-header">
            <h4>All Books</h4>
          </li>
          {this.props.books_by_category.map(category => <Category key={Object.keys(category)[0]} category={category} />)}
        </ul>
      </div>
    );
  }
}


