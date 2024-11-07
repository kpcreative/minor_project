import React from 'react';
import './DoctorList.css'; // Optional for custom styles.

function DoctorList({ searchTerm }) {
  const doctors = [
    { name: 'Dr. John Doe', specialty: 'Cardiologist', location: 'Delhi' },
    { name: 'Dr. Jane Smith', specialty: 'Dentist', location: 'Mumbai' },
    // Add more doctor data as needed
  ];

  return (
    <div className="container mt-4">
      <div className="row">
        {doctors
          .filter((doctor) =>
            doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((doctor, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{doctor.name}</h5>
                  <p className="card-text">{doctor.specialty}</p>
                  <p className="card-text">
                    <small className="text-muted">{doctor.location}</small>
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default DoctorList;
