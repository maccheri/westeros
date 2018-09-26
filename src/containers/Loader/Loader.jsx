import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

const Loader = ({ loading }) => {
  if(!loading) {
    return null;
  }

  return (
    <div className="loader-wrapper">
      <div className="lds-ring">
        <div></div><div></div><div></div><div></div>
      </div>
    </div>
  );
}

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
}

export default Loader;