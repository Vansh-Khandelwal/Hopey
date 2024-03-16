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
            Welcome to our premier e-commerce platform, offering a curated selection of fashion products for men, women, and kids, alongside stylish accessories. Explore our diverse catalog, featuring the latest trends and timeless classics from top brands and designers worldwide. From chic apparel to trendy footwear and accessories, find everything you need to elevate your style effortlessly. With seamless navigation, secure transactions, and prompt delivery, we ensure a hassle-free shopping experience. Discover unparalleled convenience and exceptional quality at our e-commerce platform today.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            For any inquiries or assistance, feel free to reach out to us:(Dummy information)
            <br />
            <br />
            Email: info@fashionemporium.com
            <br />
            <br />
            Phone: +91 (555) 123-4567
            <br />
            <br />
            Address: 123 Fashion Avenue, Cityville, State, Zip Code
            <br />
            <br />
            Our customer service team is available to assist you from Monday to Friday, 9:00 AM to 6:00 PM (EST).
          </span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <div className="logo">Hopey</div>
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