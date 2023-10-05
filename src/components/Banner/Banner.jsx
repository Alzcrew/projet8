import React from 'react';

function Banner({ image, title }) {
  return (
    <div className="banner">
      <img src={image} alt="Banner" className="banner-image" />
      {title && <h2 className="banner-title">{title}</h2>}
    </div>
  );
}

export default Banner;
