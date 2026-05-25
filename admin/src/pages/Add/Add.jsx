import "./Add.css";
import { assets } from "../../assets/admin_assets/assets";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  const [img, setImg] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", img);

    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({ name: "", description: "", category: "Salad", price: "" });
      toast(response.data.message);
      setImg(false);
    } else {
      alert("An error has occurred");
      toast(response.data.message);
    }
  };
  return (
    <form className="add-container" onSubmit={onSubmitHandler}>
      <div className="inp-item">
        <p>Upload Image:</p>
        <label htmlFor="upload" className="">
          <img
            src={img ? URL.createObjectURL(img) : assets.upload_area}
            className="img"
          />
        </label>
        <input
          onChange={(e) => setImg(e.target.files[0])}
          type="file"
          hidden
          id="upload"
          name="upload"
          required
        />
      </div>
      <div className="inp-item">
        <label htmlFor="name">Product Name:</label>
        <input
          type="text"
          name="name"
          id="ProductName"
          placeholder="Product Name"
          className="inp"
          required
          onChange={onChangeHandler}
          value={data.name}
        />
      </div>
      <div className="inp-item">
        <label htmlFor="description">Product Description:</label>
        <textarea
          name="description"
          rows="5"
          cols="17"
          className="inp"
          required
          onChange={onChangeHandler}
          value={data.description}
        ></textarea>
      </div>
      <div className="inp-item">
        <label htmlFor="category">Product Category : </label>
        <select
          name="category"
          className="selects inp"
          required
          onChange={onChangeHandler}
          value={data.category}
        >
          <option value="salad">Salad</option>
          <option value="rolls">Rolls</option>
          <option value="deserts">Deserts</option>
          <option value="samdwich">Sandwich</option>
          <option value="cake">Cake</option>
          <option value="veg">Pure Veg</option>
          <option value="pasta">Pasta</option>
          <option value="noodles">Noodles</option>
        </select>
      </div>
      <div className="inp-item">
        <label htmlFor="price">Product Price :</label>
        <input
          type="number"
          name="price"
          placeholder="140"
          className="inp"
          required
          onChange={onChangeHandler}
          value={data.price}
        />
      </div>
      <div className="">
        <button type="submit">Add</button>
      </div>
    </form>
  );
};

export default Add;
