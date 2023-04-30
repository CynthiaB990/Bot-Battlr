import React from "react";

function SortBar() {
  return (
    <div className="sort-bar">
      <div className="sort-bar__title">
        <h1>Sort By</h1>
      </div>

        <div className="sort-bar__option">
          <div className="sort-bar__option-label">
            <h2>Health</h2>
          </div>
        <div className="sort-bar__option">
          <div className="sort-bar__option-label">Price</div>
          <div className="sort-bar__option-value">price</div>
        </div>
        </div>
    </div>
  );
}

export default SortBar;