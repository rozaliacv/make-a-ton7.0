// src/pages/AdminPage.jsx
import React, { useState } from 'react';
import './AdminPage.css';

const AdminPage = () => {
  const [userDetails] = useState({
    name: 'John Official',
    officialPost: 'Disaster Relief Coordinator',
    contact: 'john.official@example.com',
  });

  const [donations] = useState([
    {
      donationId: 'D001',
      name: 'John Doe',
      requirementId: 'R001',
      quantityAllocated: 10,
    },
    {
      donationId: 'D002',
      name: 'Jane Smith',
      requirementId: 'R002',
      quantityAllocated: 20,
    },
  ]);

  // Function to extract initials from the user's name
  const getInitials = (name) => {
    const initials = name.split(' ').map((word) => word[0]).join('');
    return initials.toUpperCase();
  };

  return (
    <div className="admin-container">
      <h2>Admin Dashboard</h2>
      <div className="admin-content">
        {/* User Details Section */}
        <div className="user-details">
          <div className="avatar">
            {getInitials(userDetails.name)} {/* Show initials in the avatar */}
          </div>
          <p className="user-name">{userDetails.name}</p>
          <p><strong>Official Post:</strong> {userDetails.officialPost}</p>
          <p><strong>Contact:</strong> {userDetails.contact}</p>
        </div>

        {/* Donations Section */}
        <div className="donations-section">
          <h3>Donations Overview</h3>
          {donations.length > 0 ? (
            <table className="donations-table">
              <thead>
                <tr>
                  <th>Donation ID</th>
                  <th>Name</th>
                  <th>Requirement ID</th>
                  <th>Quantity Allocated</th>
                </tr>
              </thead>
              <tbody>
                {donations.map((donation, index) => (
                  <tr key={index}>
                    <td>{donation.donationId}</td>
                    <td>{donation.name}</td>
                    <td>{donation.requirementId}</td>
                    <td>{donation.quantityAllocated}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No donations available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

