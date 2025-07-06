import { Link } from 'react-router-dom';

function Navbar() {
  return (
    
    <nav style={{ display: 'flex', gap: '15px', padding: '10px', background: '#222' }}>
      <Link to="/" style={{ color: 'white' }}>Home</Link>
      <Link to="/rooms" style={{ color: 'white' }}>Rooms</Link>
      <Link to="/booking" style={{ color: 'white' }}>Booking</Link>
      <Link to="/contact" style={{ color: 'white' }}>Contact</Link>
      <Link to="/admin" style={{ color: 'white' }}>Admin</Link>
    </nav>
  );
}

export default Navbar;
