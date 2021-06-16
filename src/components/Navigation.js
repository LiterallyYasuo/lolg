import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Navigation (props) {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <Link class="navbar-brand" to="/">
            League of Legends General - /lolg/
          </Link>

          <div>
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  props.location.pathname === '/' ? 'active' : ''
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span className="sr-only"></span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === '/links' ? 'active' : ''
                }`}
              >
                <Link class="nav-link" to="/links">
                  Useful Links
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  props.location.pathname === '/about' ? 'active' : ''
                }`}
              >
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Navigation)
