// src/pages/Booking.jsx
export default function Booking() {
  return (
    <div>
      <h2>Book Your Stay</h2>
      <p>Please fill in your details to confirm your reservation.</p>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          marginTop: "30px",
          padding: "20px",
          background: "#fff",
          border: "1px solid #ccc",
          borderRadius: "10px"
        }}
      >
        <label>
          Full Name:
          <input type="text" placeholder="Enter your full name" required style={inputStyle} />
        </label>

        <label>
          Email Address:
          <input type="email" placeholder="Enter your email" required style={inputStyle} />
        </label>

        <label>
          Phone Number:
          <input type="tel" placeholder="+91 98765 43210" required style={inputStyle} />
        </label>

        <label>
          Check-In Date:
          <input type="date" required style={inputStyle} />
        </label>

        <label>
          Check-Out Date:
          <input type="date" required style={inputStyle} />
        </label>

        <label>
          Number of Guests:
          <input type="number" placeholder="e.g. 2" required style={inputStyle} />
        </label>

        <label>
          Room Type:
          <select required style={inputStyle}>
            <option value="">Select room type</option>
            <option value="single">Single Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="suite">Suite Room</option>
          </select>
        </label>

        <label>
          Special Requests:
          <textarea placeholder="Any special instructions..." style={{ ...inputStyle, height: "100px" }} />
        </label>

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#00bfff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc"
};
