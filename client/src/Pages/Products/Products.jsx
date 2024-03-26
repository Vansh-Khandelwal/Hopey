import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router';

import useFetch from '../../Hooks/useFetch.js';

import List from '../../Components/List/List.jsx';

import './Products.scss';

const Products = () => {

  const catId = parseInt(useParams().id);
  const [maxPrice, setmaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(`/sub-categories?[filters][category][id][$eq]=${catId}`);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked? [...selectedSubCats, value]:selectedSubCats.filter((item)=>item!==value));
  };

  // useEffect(() => {
  //   console.log(catId)
  //   console.log(data);
  // }, [data])

  return (
    <div className="products">

      <div className="left">

        <div className="filterItem">

          <h2>Product Categories</h2>

          {data?.map((item)=>(
            <div className="inputItem" key={item.id}>
              <input type="checkbox" id={item.id} value={item.id} onChange={handleChange}/>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}

        </div>

        <div className="filterItem">

          <h2>Filter by Prices</h2>

          <div className="inputItem">
            <span>0</span>
            <input type="range" min={0} max={1000} onChange={(e)=>setmaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>

          {/* In case of more than 50 products use a button to confirm the range */}

        </div>

        <div className="filterItem">

          <h2>Sort By</h2>

          <div className="inputItem">
            <input type="radio" id="asc" value="asc" name="price" onChange={e=>setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>

          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>

        </div>

      </div>

      <div className="right">

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" className="categoryImg"/>

        {
          catId ?
            error ?
              "Something is Wrong!!" : loading ?
                "Loading" : <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} /> :
            <List maxPrice={maxPrice} sort={sort} catId={catId} subCats={selectedSubCats} />
        }

      </div>

    </div>
  )
}

export default Products