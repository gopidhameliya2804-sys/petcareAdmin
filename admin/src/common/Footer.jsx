import React from 'react'
import Sidebar from './Sidebar'

function Footer() {
  return (
    <div>
      <div id="app">
        <div id="main">
          <footer>
            <div className="footer clearfix text-muted">
              <div className="float-start">
                <p>2021 © Mazer</p>
              </div>
              <div className="float-end">
                <p>
                  Crafted with{" "}
                  <span className="text-danger">
                    <i className="bi bi-heart" />
                  </span>{" "}
                  by <a href="http://ahmadsaugi.com">A. Saugi</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer
