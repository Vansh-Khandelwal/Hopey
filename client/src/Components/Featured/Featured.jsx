import React from 'react';
import useFetch from '../../Hooks/useFetch.js';

import Card from '../Card/Card.jsx';

import './Featured.scss';

const Featured = ({type, content}) => {

  const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

  // Here data are the trending or featured products

  // the url is query to filter espicially for strapi can be seen in strapi docs in rest api->filters page
  // made js file to make the acces part of the in a function global to entire project so don't hasve to write the same code again and again
  //  moreover, passing url as url changes for different pages

  // console.log(data);

  return (
    <div className="featured-products">
      <div className="top">
        <h1>{type} Products</h1>
        <p>{content}</p>
      </div>
      <div className="bottom">
        {error?"Something Went Wrong!!":loading?"loading":data?.map(item=>(<Card item={item} key={item.id}/>))}
      </div>
    </div>
  )

}

export default Featured;