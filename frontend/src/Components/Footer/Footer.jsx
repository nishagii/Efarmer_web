import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
          <footer className="contact-footer">
              <div className="footer-section">
                  <img src="logo.png" alt="Agrios Logo" />
                  <p>
                      There are many variations of passages of Lorem ipsum available, but the majority
                      suffered.
                  </p>
                  <div className="social-icons">
                      {/* Add social media icons here */}
                  </div>
              </div>
              <div className="footer-section">
                  <h4>Explore</h4>
                  <ul>
                      <li>About</li>
                      <li>Services</li>
                      <li>Our Projects</li>
                      <li>Meet the Farmers</li>
                      <li>Latest News</li>
                      <li>Contact</li>
                  </ul>
              </div>
              <div className="footer-section">
                  <h4>News</h4>
                  <ul>
                      <li>Bringing Food Production Back to Cities</li>
                      <li>The Future of Farming, Smart Irrigation Solutions</li>
                  </ul>
              </div>
              <div className="footer-section">
                  <h4>Contact</h4>
                  <p>666 888 0000</p>
                  <p>reach@helpcompany.com</p>
                  <p>80 broklyn golden street line</p>
                  <p>New York, USA</p>
                  <input type="email" placeholder="Your Email Address" />
                  <button>Subscribe</button>
              </div>
          </footer>
    </div>
  )
}

export default Footer
