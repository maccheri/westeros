import React from 'react';
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

export default Loader;