// src/pages/Admin.jsx
export default function Admin() {
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Manage your hotel bookings, rooms, and customer messages.</p>

      {/* Summary Cards */}
      <div style={{ display: "flex", gap: "20px", marginTop: "30px", flexWrap: "wrap" }}>
        <div style={cardStyle}>
          <h3>Total Bookings</h3>
          <p>152</p>
        </div>
        <div style={cardStyle}>
          <h3>Available Rooms</h3>
          <p>12</p>
        </div>
        <div style={cardStyle}>
          <h3>Messages</h3>
          <p>5 unread</p>
        </div>
        <div style={cardStyle}>
          <h3>Revenue (This Month)</h3>
          <p>₹1,80,000</p>
        </div>
      </div>

      {/* Booking Table */}
      <div style={{ marginTop: "40px" }}>
        <h3>Recent Bookings</h3>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>Guest</th>
              <th>Room</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Aakash</td>
              <td>Deluxe</td>
              <td>2025-07-10</td>
              <td>2025-07-13</td>
              <td>Confirmed</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Kavya</td>
              <td>Suite</td>
              <td>2025-07-12</td>
              <td>2025-07-15</td>
              <td>Pending</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Ravi</td>
              <td>Single</td>
              <td>2025-07-09</td>
              <td>2025-07-11</td>
              <td>Checked Out</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Styling
const cardStyle = {
  background: "#fff",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  width: "220px",
  textAlign: "center",
  boxShadow: "0 0 8px rgba(0,0,0,0.05)"
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "15px",
  background: "#fff",
  border: "1px solid #ccc",
};

tableStyle.thead = {
  backgroundColor: "#f0f0f0"
};

tableStyle.th = tableStyle.td = {
  border: "1px solid #ccc",
  padding: "10px",
  textAlign: "left"
};
