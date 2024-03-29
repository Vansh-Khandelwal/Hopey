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
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="Men Cover" />
            </div>
            <div className="row">
                <button>
                      <Link to="/products/2" className="link">
                        Women
                    </Link>
                </button>
                  <img src="https://www.astore.in/cdn/shop/products/product-image-1780509316.jpg?v=1624445394" alt="Women Cover" />
            </div>
        </div>
        <div className="col">
            <div className="row">
                <button>
                      <Link to="/products/new" className="link">
                        New Season
                    </Link>
                </button>
                  <img src="https://www.stylesgap.com/wp-content/uploads/2014/12/Outfitters-Latest-Western-Wear-Casual-Dresses-Winter-Fall-Collection-for-Modern-Boys-Girls-2014-2015-8.jpg" alt="New Season Cover" />
            </div>
        </div>
        <div className="col col-lg">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <button>
                              <Link to="/products/3" className="link">
                                Children
                            </Link>
                        </button>
                          <img src="https://indianexpress.com/wp-content/uploads/2019/09/kids-fashion.jpg" alt="Children Cover" />
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <button>
                              <Link to="/products/sale" className="link">
                                Sale
                            </Link>
                        </button>
                          <img src="https://res.cloudinary.com/jerrick/image/upload/d_642250b563292b35f27461a7.png,f_jpg,fl_progressive,q_auto,w_1024/6229c8f5feade9001f02d97d.png" alt="On Sale Products Cover" />
                    </div>
                </div>
            </div>
            <div className="row">
                <button>
                      <Link to="/products/4" className="link">
                        Accessories
                    </Link>
                </button>
                  <img src="https://img.freepik.com/free-photo/top-view-accessoires-travel-with-women-clothing-concept-white-mobilephone-watch-bag-hat-map-camera-necklace-trousers-sunglasses-white-wood-table_1921-106.jpg?size=626&ext=jpg&ga=GA1.1.735520172.1710288000&semt=ais" alt="Accessories Cover" /></div>
        </div>
    </div>
  )
}

export default Categories