import React, { Component } from 'react';
import './App.css';
import { Tabs, Tab } from 'react-materialize';
import BookList from './BookList';
import Stats from './Stats';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { 
      books_by_category: [
        {'Instructional/Business': [
          {title: 'Household Gold', sku: 'BK146', author: 'Steve Golden'},
          {title: 'Prosumer Power II', sku: 'BK154', author: 'Bill Quain'},
        ]},
        {'Economics/Spiritual': [
          {title: 'God Wants You To Be Rich', sku: 'BK117', author: 'Paul Zane Pilzer'}
        ]}
      ]
    };
  }

  componentWillMount(){
    this.setState({ books_by_category: [
        {'Instructional/Business': [
          {title: 'Household Gold', sku: 'BK146', author: 'Steve Golden'},
          {title: 'Prosumer Power II', sku: 'BK154', author: 'Bill Quain'},
        ]},
        {'Economics/Spiritual': [
          {title: 'God Wants You To Be Rich', sku: 'BK117', author: 'Paul Zane Pilzer'}
        ]}
      ]
    });
  }

  render() {
    if (!this.state.books_by_category) {
      return <p>Loading...</p>
    }
    return (
      <Tabs className='tab-demo z-depth-1'>
        <Tab title="Book List" active tabWidth={6}><BookList books_by_category={this.state.books_by_category} /></Tab>
        <Tab title="Stats" tabWidth={6}><Stats /></Tab>
      </Tabs>
    );
  }
}

export default App;
