import { Link, useLocation } from "react-router-dom";
import "./list.css";
import { Publish } from "@material-ui/icons";
import { updateList } from "../../context/listContext/apiCalls";
import { useContext } from "react";
import { ListContext } from "../../context/listContext/ListContext";
import { useState } from "react";
export default function List() {
  const [data,setData]=useState({})
  const { dispatch } = useContext(ListContext);
  const OnhandleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const handleDelete = (id) => {
    updateList(id,data, dispatch);
  };
  const location = useLocation();
  const list = location.list;
  console.log(list)
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">List</h1>
        <Link to="/newList">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopRight">
          <div className="productInfoTop">
            <span className="productName">{list?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{list?._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">genre:</span>
              <span className="productInfoValue">{list?.genre}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">type:</span>
              <span className="productInfoValue">{list?.type}</span>
             
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
          <div className="productFormLeft">
            <label>List Title</label>
            <input type="text" name="title" onChange={OnhandleChange} placeholder={list?.title} />
            
            <select name="type" onChange={OnhandleChange}>
            <label>Type</label>
              <option disabled>Select Type </option>
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
            <label>Genre</label>
            <input type="text"  name="genre" onChange={OnhandleChange} placeholder={list?.genre} />
          </div>
          <div className="productFormRight">
            <button className="productButton"  onClick={() => handleDelete(list?._id)}>Update</button>
          </div>
        
      </div>
    </div>
  );
}
