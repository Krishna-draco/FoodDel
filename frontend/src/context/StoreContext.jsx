import { createContext, useState } from "react";
import axios from "axios";
// import { food_list } from "../assets/frontend_assets/assets";
import { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cart, setCart] = useState({});
  const url = "http://localhost:4000";
  const [token,setToken] = useState("");

  const [food_list,setFoodList] = useState([])

  const Load_Food_List = async ()=>{
    const response = await axios.get(`${url}/api/food/list`)
    setFoodList(response.data.data);
    console.log(response.data.data);
  }
  const Load_Cart_Data = async ()=>{
    const response = await axios.post(
      `${url}/api/cart/cartList`,
      {},
      { headers: { token } }
    );
    setCart(response.data.cartData);
  }
  useEffect(()=>{
    if(token){
      Load_Cart_Data();
    }else{
      setCart({});
    }
  },[token])
  
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
    }
    Load_Food_List();
  },[]);

  const addToCart = async (id) => {
    if (!cart[id]) {
      setCart((prev) => ({
        ...prev,
        [id]: 1,
      }));
    } else {
      setCart((prev) => ({ ...prev, [id]: prev[id] + 1 }));
    }
    if(token){
      await axios.post(`${url}/api/cart/add`,{itemId:id},{headers:{token}});
    }
  };

  const removeFromCart = async (itemId) => {
    setCart((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    await axios.post(`${url}/api/cart/remove`,{itemId},{headers:{token}});
  };

  const totalCartCost = () => {
    let total = 0;
    food_list.forEach((foodItem) => {
      if (cart[foodItem._id] > 0) {
        total += cart[foodItem._id] * foodItem.price;
      }
    });
    return total;
  };

  const contextValue = {
    food_list,
    cart,
    addToCart,
    removeFromCart,
    totalCartCost,
    url,
    token,
    setToken
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
