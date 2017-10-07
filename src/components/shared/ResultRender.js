import React from 'react';
import PropTypes from 'prop-types';

// Generic loading state/error handler component to improve user experience
export const renderResult = (entity, children) => {
  if (entity.isFetching) {
    return <div>Loading..</div>
  }

  if (entity.errorMessage) {
    return <div className="alert alert-danger">{entity.errorMessage}</div>
  }

  return children
};

const ResultRender = ({ entity, children }) => (
  <div>
    {renderResult(entity, children)}
  </div>
);

ResultRender.propTypes = {
  entity: PropTypes.object
};

export default ResultRender;