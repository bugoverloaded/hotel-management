// src/pages/Contact.jsx
export default function Contact() {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out. We’re here 24/7 for you!</p>

      {/* Contact Info Section */}
      <div style={{ marginTop: "30px", display: "flex", flexWrap: "wrap", gap: "40px" }}>
        {/* Left - Info */}
        <div style={{ flex: "1" }}>
          <h3>Our Address</h3>
          <p>Royal hotel<br />Ejipura signal<br />Koramongala, Bengaluru - 600001</p>

          <h3>Email</h3>
          <p>contact@royalhotel.com</p>

          <h3>Phone</h3>
          <p>+91 98765 43210</p>

          <h3>Follow Us</h3>
          <p>
            <a href="https://facebook.com" target="_blank" style={linkStyle}>Facebook</a> |{" "}
            <a href="https://instagram.com" target="_blank" style={linkStyle}>Instagram</a> |{" "}
            <a href="https://twitter.com" target="_blank" style={linkStyle}>Twitter</a>
          </p>
        </div>

        {/* Right - Form */}
        <form
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            padding: "20px",
            background: "#fff",
            border: "1px solid #ccc",
            borderRadius: "10px",
            minWidth: "300px"
          }}
        >
          <label>
            Your Name:
            <input type="text" placeholder="Enter your name" required style={inputStyle} />
          </label>

          <label>
            Email:
            <input type="email" placeholder="Enter your email" required style={inputStyle} />
          </label>

          <label>
            Message:
            <textarea placeholder="Write your message..." required style={{ ...inputStyle, height: "100px" }} />
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
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div style={{ marginTop: "50px" }}>
        <h3>Find Us on Map</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195099.1725283602!2d80.08956475863384!3d13.080172538068424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267433d9c8889%3A0x509a1167be02a1e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1687070860846!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: "10px", marginTop: "10px" }}
          allowFullScreen=""
          loading="lazy"
          title="Hotel BlueMoon Map"
        ></iframe>
      </div>
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

const linkStyle = {
  color: "#00bfff",
  textDecoration: "none",
  fontWeight: "bold"
};
