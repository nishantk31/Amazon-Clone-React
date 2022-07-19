import React from "react";
function Footer() {
  return (
    <div class="footer">
      <div class="footer_row d-flex">
        <div class="logo">
          <img src="images/logo.png" alt="" />
        </div>
        <div class="pages">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div class="contact">
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-map-marker-alt"></i>
                <span>Bangalore, Karnataka</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-envelope-open-text"></i>
                <span>example@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="developer">
        <a href="#">
          Desinged By ~ <span>Nishant Kohale</span>
        </a>
      </div>
    </div>
  );
}

export default Footer;
