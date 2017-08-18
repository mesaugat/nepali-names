import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';
import NameList from './NameList';
import NameFilter from './NameFilter';

import firebase from '../firebase';

/**
 * App Component.
 */
class App extends Component {
  state = {
    names: [],
    filteredNames: [],

    isLoading: true,

    input: {
      name: '',
      male: true,
      female: true
    }
  };

  searchHandler = event => {
    const value = event.target.value;
    let { input } = this.state;
    input.name = value;

    this.setState({ input }, this.filterNames);
  };

  checkboxHandler = event => {
    const gender = event.target.name;
    let { input } = this.state;

    input[gender] = !input[gender];

    this.setState({ input }, this.filterNames);
  };

  filterNames() {
    const { names, input } = this.state;
    let males = [],
      females = [];

    let filteredNames = names.filter(({ name }) => {
      const string = name.toLowerCase();

      return string.indexOf(input.name.toLowerCase()) === 0;
    });

    if (input.male) {
      males = filteredNames.filter(({ gender }) => gender === 'male');
    }

    if (input.female) {
      females = filteredNames.filter(({ gender }) => gender === 'female');
    }

    // Merge and sort the results
    const result = [...males, ...females].sort((a, b) => a.id - b.id);

    this.setState({ filteredNames: result });
  }

  componentDidMount() {
    let names = [];
    let index = 1;

    firebase
      .database()
      .ref()
      .orderByChild('name')
      .once('value')
      .then(snapshot => {
        // Cannot use snapshot.toJSON() because the order of keys in a
        // JSON object is determined by the browser and not by Firebase
        snapshot.forEach(child => {
          names.push({ ...child.val(), id: index });
          index++;
        });

        this.setState({
          names,
          isLoading: false,
          filteredNames: names
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <main>
            <NameFilter
              names={this.state.names}
              input={this.state.input}
              filterNames={this.filterNames}
              filterHandler={this.filteredNames}
              searchHandler={this.searchHandler}
              checkboxHandler={this.checkboxHandler}
            />
            <NameList
              names={this.state.filteredNames}
              isLoading={this.state.isLoading}
            />
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
