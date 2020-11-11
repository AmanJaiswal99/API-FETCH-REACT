import React from 'react'
import { Link } from 'react-router-dom'
import '../css/payment.css'

function Payment() {
    return (
        <div className='payment'>
        <div className='container'>
            <div className='item'>
            <h1>Item name</h1>
            <img className='item_img' alt='img'></img>
            <h2>Price</h2>
            <Link to='/'><button>Back to homepage</button></Link>
            </div>


            <div className='pay'>
                <h1 className='payment_heading'>Proceed to Payment</h1>
                <div className="paym">
                <div className="rest">
                <h2>Enter Card Number</h2>
                <input type='text' placeholder='****-****-****-****'/>
                <h2>CVV</h2>
                <input type='password'/>
                <div className="otp">
                    <button>Send OTP</button>
                    <input type='text' placeholder='Enter otp'/>
                </div>
                </div>

                    <div className="drop">
                    <select className='dropdown'>
                      <option >Credit Card</option>
                      <option >Debit Card</option>
                </select>
                    </div>
                    
                </div>
                
               
                <button>Pay</button>
            </div>
        
        </div>
        </div>
        
    )
}

export default Payment

