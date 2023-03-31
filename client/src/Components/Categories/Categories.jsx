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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" />
            </div>
        </div>
        <div className="col">
            <div className="row">
                <button>
                    <Link to="/products/1" className="link">
                        New Season
                    </Link>
                </button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" />
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
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" />
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <button>
                            <Link to="/products/1" className="link">
                                Sale
                            </Link>
                        </button>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" />
                    </div>
                </div>
            </div>
            <div className="row">
                <button>
                    <Link to="/products/1" className="link">
                        Accessories
                    </Link>
                </button>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaUdHuaIhQEKalnwNQu_WZJplJnVZoReDX-Q&usqp=CAU" alt="" /></div>
        </div>
    </div>
  )
}

export default Categories