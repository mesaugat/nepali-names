import React from 'react';

/**
 * Header Component.
 */
const Header = () => (
  <nav>
    <div className="nav-wrapper teal darken-3">
      <div className="container">
        <a href="/nepali-names" className="brand-logo">
          Nepali Names
        </a>
        <a
          className="grey-text text-lighten-4 right"
          href="https://github.com/mesaugat/nepali-names"
        >
          <i
            className="fa fa-github material-icons"
            title="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
          />
        </a>
      </div>
    </div>
  </nav>
);

export default Header;
