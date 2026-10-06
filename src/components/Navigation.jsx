import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navigation() {
  // Is the mobile menu open?
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/" onClick={closeMenu}>
          📚 StudyBuddy AI
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-controls="mainNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}
          id="mainNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" end onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create" onClick={closeMenu}>
                Create
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/library" onClick={closeMenu}>
                Library
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation