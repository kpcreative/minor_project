import React from 'react';
import './SearchBar.css'; // Custom CSS for additional styling

function SearchBar() {
  return (
    <div className="container my-4">
      <div className="row justify-content-center">
        {/* Add a parent div with flexbox to align both inputs in the same row */}
        <div className="col-md-9 d-flex justify-content-between">
          <div className="input-group me-2"> {/* Added margin for spacing */}
            <span className="input-group-text">
              <i className="bi bi-geo-alt"></i> {/* Bootstrap icon */}
            </span>
            <input type="text" className="form-control" placeholder="Bangalore" />
          </div>
          <div className="input-group flex-grow-1"> {/* Use flex-grow for the search bar */}
            <span className="input-group-text">
              <i className="bi bi-search"></i> {/* Search icon */}
            </span>
            <input type="text" className="form-control" placeholder="Search doctors, clinics, hospitals, etc." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
