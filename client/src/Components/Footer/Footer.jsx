import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">

      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Men</span>
          <span>Women</span>
          <span>Children</span>
          <span>Accessories</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQs</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore qui consectetur aperiam! 
            Quo nam molestiae distinctio necessitatibus fuga dolorum adipisci. Illo nihil expedita beatae quae 
            tempore nesciunt autem laudantium?
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolore qui consectetur aperiam!
            Quo nam molestiae distinctio necessitatibus fuga dolorum adipisci. Illo nihil expedita beatae quae
            tempore nesciunt autem laudantium?
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="logo">Name</div>
          <div className="copyright">
            © Copyright 2023. All Rights Reserved</div>
        </div>
        <div className="right">
          <img src="/images/footer.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer