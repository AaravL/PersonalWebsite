import { Link } from 'react-router-dom'
import blankCardImage from './640px-Ace_of_Spades.png'

export default function Navigation() {
  const linkStyle = {
    backgroundImage: `url('${blankCardImage}')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '0.8rem 1.5rem',
    borderRadius: '5px',
    border: '2px solid #8a7c6f',
    width: '90px',
    height: '130px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#000000',
    fontWeight: '600',
    fontSize: '0.85rem',
  }

  return (
    <nav>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/portfolio" style={linkStyle}>Portfolio</Link>
      <Link to="/skills" style={linkStyle}>Skills</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  )
}
