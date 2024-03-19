import React from 'react';

import Categories from '../../Components/Categories/Categories.jsx';
import Contact from '../../Components/Contact/Contact.jsx';
import Featured from '../../Components/Featured/Featured.jsx';

import Slider from '../../Components/Slider/Slider.jsx';

import './Home.scss';

const Home = () => {

  const featuredContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis enim minima recusandae laudantium? Quidem, odit voluptatum quia labore incidunt vero perspiciatis doloribus perferendis, nostrum doloremque repellendus a obcaecati ea.(Dummy content 1)";
  const trendContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis enim minima recusandae laudantium? Quidem, odit voluptatum quia labore incidunt vero perspiciatis doloribus perferendis, nostrum doloremque repellendus a obcaecati ea.(Dummy content 2)";

  return (
    <div className="home">
      <Slider/>
      <Featured type="Featured" content={featuredContent} />
      <Categories/>
      <Featured type="Trending" content={trendContent} />
      <Contact/>
    </div>
  )
}

export default Home
