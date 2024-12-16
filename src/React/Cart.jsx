import React, { useState } from 'react'

const Cart = () => {


    const ITEMS = [{
        name: "White Hoodie",
        price: 799,
        size: ['s', 'm', "l", "xl", 'xxl']
    },

    {
        name: "Black Hoodie",
        price: 799,
        size: ['s', 'm', "l", "xl", 'xxl'],

    },
    ];


    const [cart, setCart] = useState([]);
    const [selectSize, setSelectSize] = useState('m');

    console.log(cart);



    const addToCart =  (value, selectSize) => {
        let check = cart.find((incart) => incart.name === value.name);

        if (!check) {

            const cartItem = {
                name: value.name,
                price: value.price,
                size: selectSize,
            }

            setCart(...cart, cartItem);

        }
        else {
            alert("already in a cart");
        }

    }











    return (
        <div className='flex '>
            <p>Cart</p>

            <div className="flex" style={{
                display: "flex",
                gap: "20px"
            }}>
                {
                    ITEMS.map((value, index) => {
                        return (
                            <div className="flex ">
                                <p>{value.name}</p>
                                <p>{value.price}</p>
                                <div className="flex" style={{
                                    display: "flex",
                                    gap: "5px"
                                }}>
                                    {
                                        value.size.map((value, index) => {
                                            return (
                                                <div className="flexx" key={index}>
                                                    <button
                                                        onClick={() => setSelectSize(value)}
                                                    >{value}</button>
                                                </div>
                                            );
                                        })
                                    }
                                </div>

                                <button onClick={() => addToCart(value, selectSize)}>Add to Cart</button>

                            </div>
                        );
                    })


                }


                <div className="flexx">
                    {/* 
                    {
                        cart.map((value, index) => {
                            return (
                                <div className="flex">
                                    <p>{value.name}</p>
                                    <p>{value.price}</p>
                                </div>
                            );
                        })
                    } */}
                </div>
            </div>

        </div>
    )
}

export default Cart
