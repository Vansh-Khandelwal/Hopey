import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

import useFetch from '../../Hooks/useFetch.js';

import './Product.scss';
import { addToCart } from '../../Redux/cartReducer.js';

const Product = () => {

  const id = useParams().id;
  const [selectedImg, setSelectedImg] = useState("img");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const {data, loading, error} = useFetch(
    `/products/${id}?populate=*`
  );

  console.log(data);
  
  return (
    <div className="product">
      {error ? "Something Went Wrong!!" : loading ? "loading" :
      (<>
      <div className="top">
          <div className="left">
            <div className="images">
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img")} />
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.img2?.data?.attributes?.url} alt="" onClick={e => setSelectedImg("img2")} />
            </div>
            <div className="mainImg">
                <img src={process.env.REACT_APP_UPLOAD_URL + data?.attributes?.[selectedImg]?.data?.attributes?.url} alt="" />
            </div>
          </div>

          <div className="right">

            <h1>{data?.attributes?.title}</h1>
              <span className="price">$ {data?.attributes?.price}</span>
            <p>
              {data?.attributes?.desc}
            </p>
            <div className="quantity">
              <button onClick={e => setQuantity((prev)=>prev===1?1:prev-1)}>-</button>
              {quantity}
              <button onClick={e => setQuantity(quantity + 1)}>+</button>
            </div>

            <div className="add" onClick={()=>dispatch(addToCart({
                id:data.id,
                title:data.attributes.title,
                desc:data.attributes.desc,
                img:data.attributes.img.data.attributes.url,
                quantity,
              }))}>
                
              <AddShoppingCartIcon/> ADD TO CART
            </div>

            <div className="links">

              <div className="item">
                <FavoriteBorderIcon/> ADD TO WISH LIST
              </div>

              <div className="item">
                <BalanceIcon/> ADD TO COMPARE
              </div>

            </div>

            <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
            </div>

          </div>

        </div>

        <hr />

        <div className="bottom">
          <div className="details">

            <div className="productDesc">
              <h2>DESCRIPTION</h2>
              <hr />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ipsam, quo praesentium sequi officiis rem maiores, similique voluptatum corporis perferendis neque dolores natus ratione totam odit ab deleniti sed! Modi.</p>
            </div>

            <div className="productAdditionalInfo">
              <h2>ADDITIONAL INFORMATION</h2>
              <hr />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ea rem nesciunt commodi fugit repudiandae sint voluptate illum deserunt optio accusantium quia error quasi, magnam, minus similique ducimus ipsam aliquam.</p>
            </div>

            <div className="productFAQs">
              <h2>FAQ</h2>
              <hr />
            </div>
            
          </div>
        </div>  

      </>)}
      
    </div>
  )
}

export default Product