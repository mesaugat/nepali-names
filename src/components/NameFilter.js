import React from 'react';

/**
 * NameFilter Component.
 */
const NameFilter = props => {
  return (
    <div className="row">
      <div className="input-field col offset-s1 offset-m1 offset-l1 m5 s5 l5">
        <i className="fa fa-search prefix" aria-hidden="true" />
        <input
          type="text"
          id="name"
          name="name"
          value={props.input.name}
          onChange={props.searchHandler}
        />
        <label htmlFor="name">Name</label>
      </div>
      <div className="input-field fixed col offset-s1 offset-m1 offset-l1 m2 s5 l2">
        <input
          type="checkbox"
          id="male"
          name="male"
          checked={props.input.male}
          onChange={props.checkboxHandler}
        />
        <label htmlFor="male">Male</label>
      </div>
      <div className="input-field fixed col offset-s1 offset-l1 m3 s5 l2">
        <input
          type="checkbox"
          id="female"
          name="female"
          checked={props.input.female}
          onChange={props.checkboxHandler}
        />
        <label htmlFor="female">Female</label>
      </div>
    </div>
  );
};

export default NameFilter;