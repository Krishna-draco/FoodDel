import React, { useEffect, useState } from 'react'
import './List.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const List = ({url}) => {
  const [list,setList] = useState([]);

  useEffect(() => {
    fetchList();
  }, []);

  const fetchList = async() =>{
    const response = await axios.get(`${url}/api/food/list`);
    if(response.data.success){
      setList(response.data.data);
      console.log(list);
    }
    else{
      toast.error("Error");
    }
  }

  const DeleteItem = async (id)=>{
    const response = await axios.post(`${url}/api/food/remove`,{id:id})
    if(response.data.success){
      fetchList();
      toast(response.data.message);
    }
    else{
      toast(response.data.message);
    }
  }
  return (
    <div className='list-container'>
      <p>All foods list</p>
      <div className='items-container'>
        <div className='head arrangement'>
          <b className='item'>Image</b>
          <b className='item'>Name</b>
          <b className='item'>Category</b>
          <b className='item'>Price</b>
          <b className='item'>Action</b>
        </div>
        {list.map((item,idx)=>{
          return (
            <div key={idx} className="items arrangement">
              <div className="item">
                <img
                  className="list-img "
                  src={`${url}/images/${item.image}`}
                  alt=""
                />
              </div>
              <p className="item">{item.name}</p>
              <p className="item">{item.category}</p>
              <p className="item">{item.price}</p>
              <p className="item delete" onClick={() => DeleteItem(item._id)}>
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default List
