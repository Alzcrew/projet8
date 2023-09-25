import React from 'react';
import PropTypes from 'prop-types';

export default function RatingStars({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starClass = index < rating ? 'active-star' : 'inactive-star';
    return <span key={index} className={starClass}>&#9733;</span>;
  });

  return (
    <div className="rating-stars">
      {stars}
    </div>
  );
}

RatingStars.propTypes = {
  rating: PropTypes.number.isRequired,
};
