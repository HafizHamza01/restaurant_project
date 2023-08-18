// 7

import React from 'react'
import Temp from './Temp';
import { Manu_list } from './Manu_list';
function Restaurant_Manu(props) {
  return (
    <>
      <nav className=' fa-nav'>
        <div>
          <h1 className="container facart-manu">Manu List</h1>
        </div>
      </nav>
      <div className='container card-container d-flex'>
        <div className='row'>
          {
            Manu_list.map((item) => (
              <Temp item={item} data={props.data} />
            ))}
        </div>
      </div>
    </>
  );
}

export default Restaurant_Manu;
