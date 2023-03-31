import React from 'react';

import Categories from '../../Components/Categories/Categories.jsx';
import Contact from '../../Components/Contact/Contact.jsx';
import Featured from '../../Components/Featured/Featured.jsx';

import Slider from '../../Components/Slider/Slider.jsx';

import './Home.scss';

const Home = () => {

  const content1 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus corporis enim minima recusandae laudantium? Quidem, odit voluptatum quia labore incidunt vero perspiciatis doloribus perferendis, nostrum doloremque repellendus a obcaecati ea.";

  return (
    <div className="home">
      <Slider/>
      <Featured type="Featured" content={content1}/>
      <Categories/>
      <Featured type="Trending" content={content1}/>
      <Contact/>
    </div>
  )
}

export default Home
