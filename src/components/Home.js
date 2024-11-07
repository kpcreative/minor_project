import React, { useState } from 'react';
import './Home.css';
import DoctorList from './DoctorList';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="home">
      <h1>Welcome to Practo Clone</h1>
      <input
        type="text"
        placeholder="Search for Doctors"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <DoctorList searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
