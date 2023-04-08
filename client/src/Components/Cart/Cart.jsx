import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import './Cart.scss';
import { makeRequest } from '../../makeRequest.js';
import { removeItem, resetCart } from '../../Redux/cartReducer';

import { loadStripe } from '@stripe/stripe-js';

const Cart = () => {

    const products = useSelector(state=>state.Cart.products);

    console.log(products);

    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products.forEach(item=>(total+=item.quantity*item.price));
        return total.toFixed(2);
    };

    const stripePromise = loadStripe('pk_test_51Mqh9dSGYCYJ5YUMPOOi8C03KutgBoiDWDZMAD890B9Z8uUtibOrSAoxEdqIOQjrngfDkjdfkf6reVrJvrJCzbf800u6AHzcvf');

    const handlePayment = async() => {
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post("/orders", {
                products,
            })

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            })

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="cart">
            <h1>Products in your Cart</h1>
            <hr />
            {products?.map(item=>(
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <h3>{item.title}</h3>
                        <p>{item.desc?.substring(0,100)}</p>
                        <div className="price">{item.quantity} x ${item.Price}</div>
                    </div>
                    <DeleteOutlineIcon className="delete" onClick ={()=>dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>SUBTOTAL</span>
                <span>${totalPrice}</span>
            </div>
            <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
            <div className="reset" onClick={()=>dispatch(resetCart())}>Reset Cart</div>
        </div>
    )
}

export default Cart