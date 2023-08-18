// 9

import React from 'react'

function Temp(props) {
  const item = props.item;
  return (
    <>
      <div className="card m-2 border-0" style={{ width: 300 }}>
        <img className="card-img-top" style={{ height: 150 }} src={item.product_image} alt="" />
        <div className="card-body">
          <p className="card-title">{item.product_name}</p>
          <p className="card-price">{item.price}</p>
          <button className="btn btn-primary" id="manu-btn" onClick={(event) => { props.data(item) }}>Add To Cart</button>
        </div>
      </div>
    </>
  )
}

export default Temp;
