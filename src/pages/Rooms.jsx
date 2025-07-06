// src/pages/Rooms.jsx
export default function Rooms() {
  return (
    <div>
      <h2>Our Rooms</h2>
      <p>Choose from a variety of beautifully designed rooms to suit every need.</p>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", marginTop: "30px" }}>
        {/* Room 1 */}
        <div style={{ width: "300px", border: "1px solid #ddd", borderRadius: "10px", padding: "15px", background: "#fff" }}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Single Room"
            style={{ width: "100%", height: "180px", borderRadius: "10px" }}
          />
          <h3>Single Room</h3>
          <p>Perfect for solo travelers. Includes Wi-Fi, TV, and breakfast.</p>
          <p><strong>₹1,500/night</strong></p>
          <button style={{ padding: "8px 12px", backgroundColor: "#00bfff", color: "white", border: "none", borderRadius: "5px" }}>
            Book Now
          </button>
        </div>

        {/* Room 2 */}
        <div style={{ width: "300px", border: "1px solid #ddd", borderRadius: "10px", padding: "15px", background: "#fff" }}>
          <img
            src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
            alt="Deluxe Room"
            style={{ width: "100%", height: "180px", borderRadius: "10px" }}
          />
          <h3>Deluxe Room</h3>
          <p>Spacious and luxurious. Comes with AC, private balcony, and more.</p>
          <p><strong>₹2,800/night</strong></p>
          <button style={{ padding: "8px 12px", backgroundColor: "#00bfff", color: "white", border: "none", borderRadius: "5px" }}>
            Book Now
          </button>
        </div>

        {/* Room 3 */}
        <div style={{ width: "300px", border: "1px solid #ddd", borderRadius: "10px", padding: "15px", background: "#fff" }}>
          <img
            src="https://images.unsplash.com/photo-1553440569-bcc63803a83d"
            alt="Suite Room"
            style={{ width: "100%", height: "180px", borderRadius: "10px" }}
          />
          <h3>Suite Room</h3>
          <p>Ultimate comfort for families or long stays. Includes everything!</p>
          <p><strong>₹4,500/night</strong></p>
          <button style={{ padding: "8px 12px", backgroundColor: "#00bfff", color: "white", border: "none", borderRadius: "5px" }}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
