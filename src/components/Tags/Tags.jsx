import React from 'react';
import PropTypes from 'prop-types';

export default function Tags({ children }) {
  return (
    <div className="logement-tags">
      {children}
    </div>
  );
}

Tags.propTypes = {
  children: PropTypes.node.isRequired,
};
