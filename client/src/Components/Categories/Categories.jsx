import React from 'react';

import {Link} from 'react-router-dom';

import './Categories.scss';

const Categories = () => {
  return (
    <div className="categories">
        <div className="col">
            <div className="row">
                <button>
                    <Link to="/products/1" className="link"> 
                        Men
                    </Link>
                </button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" />
            </div>
            <div className="row">
                <button>
                    <Link to="/products/1" className="link">
                        Women
                    </Link>
                </button>
                  <img src="https://www.astore.in/cdn/shop/products/product-image-1780509316.jpg?v=1624445394" alt="" />
            </div>
        </div>
        <div className="col">
            <div className="row">
                <button>
                    <Link to="/products/1" className="link">
                        New Season
                    </Link>
                </button>
                  <img src="https://www.stylesgap.com/wp-content/uploads/2014/12/Outfitters-Latest-Western-Wear-Casual-Dresses-Winter-Fall-Collection-for-Modern-Boys-Girls-2014-2015-8.jpg" alt="Season Cover Image" />
            </div>
        </div>
        <div className="col col-lg">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <button>
                            <Link to="/products/1" className="link">
                                Children
                            </Link>
                        </button>
                          <img src="https://indianexpress.com/wp-content/uploads/2019/09/kids-fashion.jpg" alt="Children Cover Image" />
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <button>
                            <Link to="/products/1" className="link">
                                Sale
                            </Link>
                        </button>
                          <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6229c8f5feade9001f02d97d.png" alt="On Sale Products Cover Image" />
                    </div>
                </div>
            </div>
            <div className="row">
                <button>
                    <Link to="/products/1" className="link">
                        Accessories
                    </Link>
                </button>
                  <img src="https://img.freepik.com/free-photo/top-view-accessoires-travel-with-man-clothing-concept-bow-tie-wallet-wooden-background-watch-sunglasses-bag-hat-shoes-wood-table_1921-89.jpg?w=996&t=st=1710495975~exp=1710496575~hmac=dd609d4dfe441e9434a33807031e8f7e4544106ffe0b503b8b8660e09c94cd43" alt="Accessories Cover Image" /></div>
        </div>
    </div>
  )
}

export default Categories