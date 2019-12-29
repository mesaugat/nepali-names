import React, { Component } from 'react';
import { AutoSizer, List } from 'react-virtualized';

import maleIcon from '../assets/male.png';
import femaleIcon from '../assets/female.png';

/**
 * Component to list all the names in a virtualized list.
 */
class NameList extends Component {
  rowRenderer = ({ key, index, style }) => {
    const { names } = this.props;

    return (
      <div key={key} style={style}>
        <li className="collection-item avatar">
          <img
            src={names[index].gender === 'male' ? maleIcon : femaleIcon}
            alt="avatar"
            className="circle"
          />
          <span className="title">{names[index].name}</span>
          <p className="secondary-title">
            {names[index].gender.charAt(0).toUpperCase() +
              names[index].gender.slice(1)}
          </p>
        </li>
      </div>
    );
  };

  noRowsRenderer = () => {
    const { isLoading } = this.props;

    return (
      <li className="collection-item center">
        {isLoading ? (
          <div className="loading">
            <i
              className="fa fa-refresh fa-fw"
              title="Refresh"
              aria-hidden="true"
            />{' '}
            Loading...
          </div>
        ) : (
          <div>
            <i
              className="fa fa-exclamation-circle fa-fw"
              title="Warning"
              aria-hidden="true"
            />{' '}
            Nothing to show.
          </div>
        )}
      </li>
    );
  };

  render() {
    const { names, total, isLoading } = this.props;

    return (
      <div>
        {isLoading ? (
          ''
        ) : (
          <p className="small grey-text text-darken-1 right-align">
            Showing {names.length} of {total} names
          </p>
        )}
        <ul className="collection">
          <AutoSizer disableHeight>
            {({ width }) => (
              <List
                width={width}
                height={window.innerHeight - 220}
                rowCount={names.length}
                rowHeight={70}
                noRowsRenderer={this.noRowsRenderer}
                rowRenderer={this.rowRenderer}
              />
            )}
          </AutoSizer>
        </ul>
      </div>
    );
  }
}

export default NameList;
