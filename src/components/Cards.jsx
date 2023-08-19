import React from "react";

function Cards() {
  return (
    <div>
      <h2>Featured Listings</h2>
      <div className="card">
        <img src="property-image.jpg" alt="Property" />
        <h3>Spacious Apartment</h3>
        <p>Beautiful apartment with modern amenities.</p>
      </div>
      {/* More cards */}
    </div>
  );
}

export default Cards;
