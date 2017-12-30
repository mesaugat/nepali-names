import React from 'react';

/**
 * Component to filter name list.
 */
const NameFilter = props => {
  const { input, searchHandler, checkboxHandler } = props;

  return (
    <div className="row filter">
      <div className="input-field col offset-s1 offset-m1 offset-l1 m5 s10 l5">
        <i className="fa fa-search prefix" aria-hidden="true" />
        <input
          type="text"
          id="name"
          name="name"
          value={input.name}
          onChange={searchHandler}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-field fixed col offset-m1 offset-l1 m2 l2 hide-on-small-only">
        <input
          type="checkbox"
          className="filled-in"
          id="male"
          name="male"
          checked={input.male}
          onChange={checkboxHandler}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div className="input-field fixed col offset-l1 m3 l2 hide-on-small-only">
        <input
          type="checkbox"
          className="filled-in"
          id="female"
          name="female"
          checked={input.female}
          onChange={checkboxHandler}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  );
};

export default NameFilter;
