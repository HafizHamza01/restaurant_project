// 10

import React from 'react'

function AddToCart(props) {
  const data = props.item;
  return (
    <>
      <div className='container d-flex'>
        <div className='row m-2'>
          {
            data.map((data) => (
              <div className="Add_To_card border-0" style={{ width: 200 }}>
                <img className="card-img-top" style={{ height: 150 }} src={data.product_image} alt="" />
                <div className="card-body">
                  <p className="card-title">{data.product_name}</p>
                  <p className="card-price">{data.price}</p>
                </div>
                <div className='count_btn'>
                  <button id='bg-red' onClick={(event) => { props.decrease(data) }}>-</button>
                  <button>{data.quantity}</button>
                  <button id='bg-green' onClick={(event) => { props.increase(data) }}>+</button>
                </div>
                <hr />
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default AddToCart;

