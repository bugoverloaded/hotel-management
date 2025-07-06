// src/pages/Home.jsx
export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Welcome to Hotel Royal</h2>
      <p style={{ fontSize: "18px", color: "#555" }}>
        Your comfort is our priority. Experience luxury and hospitality at its finest.
      </p>

      {/* Banner Video */}
      <video
        src="/src/assets/hotel.mp4
"
        controls
        autoPlay
        muted
        loop
        style={{ width: "100%", borderRadius: "10px", marginTop: "20px" }}
      >
        Your browser does not support the video tag.
      </video>

      {/* About Section */}
      <section style={{ marginTop: "40px" }}>
        <h3>About Our Hotel</h3>
        <p>
          Hotel Royal is a premium 5-star hotel located in the heart of the city. We offer a
          combination of world-class comfort and a touch of traditional hospitality. Whether you
          are here for a vacation, a business trip, or a weekend getaway, we ensure your stay is
          memorable.
        </p>
      </section>

      {/* Services Section */}
      <section style={{ marginTop: "40px" }}>
        <h3>Our Services</h3>
        <ul style={{ lineHeight: "1.8" }}>
          <li>✔️ Luxurious Rooms and Suites</li>
          <li>✔️ Rooftop Restaurant and Café</li>
          <li>✔️ 24/7 Room Service</li>
          <li>✔️ Swimming Pool & Spa</li>
          <li>✔️ Free Wi-Fi & Smart TVs</li>
          <li>✔️ Airport Pickup & Drop</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section style={{ marginTop: "40px", textAlign: "center" }}>
        <h3>Ready to Book Your Stay?</h3>
        <a href="/booking">
          <button
            style={{
              padding: "12px 25px",
              backgroundColor: "#00bfff",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "10px",
            }}
          >
            Book Now
          </button>
        </a>
      </section>
    </div>
  );
}
