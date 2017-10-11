import React from 'react';

/**
 * NameFilter Component.
 */
const NameFilter = props => {
  return (
    <div>
      <div className="row filter">
        <div className="input-field col s10 m10 offset-m1 hide-on-small-only">
          <i className="fa fa-search prefix" aria-hidden="true" />
          <input
            type="text"
            id="name"
            name="name"
            value={props.input.name}
            onChange={props.searchHandler}
          />
          <label htmlFor="name">Search Names</label>
        </div>
      </div>
      <div>
        <small>Filter by:</small>
      </div>
      <div className="row filter filter-container">
        <div className="input-field fixed col m1 l1">
          <input
            type="checkbox"
            className="filled-in"
            id="male"
            name="male"
            checked={props.input.male}
            onChange={props.checkboxHandler}
          />
          <label htmlFor="male">Male</label>
        </div>
        <div className="input-field fixed col m1 l1 hide-on-small-only">
          <input
            type="checkbox"
            className="filled-in"
            id="female"
            name="female"
            checked={props.input.female}
            onChange={props.checkboxHandler}
          />
          <label htmlFor="female">Female</label>
        </div>
      </div>
    </div>
  );
};

export default NameFilter;
