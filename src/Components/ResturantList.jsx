// 3

import React from "react";
import { Restaurant_items } from "./Restaurant_items";
import { useState } from "react";
function ResturantList() {
  const [dataArr, setData] = useState([...Restaurant_items]);
  const [inputData, setInputData] = useState({
    id: 0,
    name: "",
    address: "",
    rating: "",
    email: ""
  });

  const handleChanges = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    inputData.id = dataArr[dataArr.length - 1].id + 1;
    setData([...dataArr, inputData])
    setInputData({
      ...inputData,
      id: 0,
      name: "",
      address: "",
      rating: "",
      email: ""
    })
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} id="form">
        <input type="text" className="m-2 form" value={inputData.name} placeholder="Product Name" name="name" onChange={(e) => handleChanges(e)} />
        <input type="text" className="m-2 form" value={inputData.address} placeholder="Enter City" name="address" onChange={(e) => handleChanges(e)} />
        <input type="text" className="m-2 form" value={inputData.rating} placeholder="Rating" name="rating" onChange={(e) => handleChanges(e)} />
        <button className="btn btn-primary m-2 form">Submit</button>
      </form>
      <h1 className="my-2" style={{ textAlign: "center" }}>Restaurant List</h1>
      <div className="dark my-4 container border border-dark">
        <div className="row ">
          <div className="col-lg-3 fw-bold border border-dark">#</div>
          <div className="col-lg-3 fw-bold border border-dark">Product Name</div>
          <div className="col-lg-3 fw-bold border border-dark">Address</div>
          <div className="col-lg-3 fw-bold border border-dark">Rating</div>
        </div>
      </div>
      {dataArr.map((data) => (
        <div className="dark my-2  container">
          <div className="row">
            <div className="col-lg-3 border border-dark">{data.id}</div>
            <div className="col-lg-3 border border-dark">{data.name}</div>
            <div className="col-lg-3 border border-dark">{data.address}</div>
            <div className="col-lg-3 border border-dark">{data.rating}</div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ResturantList;
