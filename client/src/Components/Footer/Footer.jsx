import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">

      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <Link to="/products/1" className="link">
            Men
          </Link>
          <Link to="/products/2" className="link">
            Women
          </Link>
          <Link to="/products/3" className="link">
            Children
          </Link>
          <Link to="/products/4" className="link">
            Accessories
          </Link>
          <Link to="/products/new" className="link">
            New Season
          </Link>
          <Link to="/products/sale" className="link">
            Sale
          </Link>
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
            Introducing our dummy e-commerce platform - a demonstrative website built to showcase modern online shopping features. While not a fully functional retail site, it offers a comprehensive overview of e-commerce capabilities.
            <br />
            Our platform boasts an intuitive admin panel, simplifying product management from creation to inventory updates. With user-friendly controls, it illustrates how effortless managing an online store can be.
            <br />
            Moreover, we've integrated a secure payment gateway, facilitating safe transactions in a simulated environment. Powered by React for dynamic interfaces, Strapi for backend content management, and Supabase for database functionality, our platform highlights seamless technology integration.
            <br />
            Designed for developers seeking learning opportunities or business owners exploring e-commerce solutions, our dummy website provides valuable insights into online retail operations. Experience the potential of e-commerce with our demonstration platform today.
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