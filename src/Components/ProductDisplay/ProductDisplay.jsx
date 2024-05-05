import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const {addToCart} =useContext(ShopContext)
  console.log(product);
  return (
    <div className="productdisplay" >
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">        
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">          
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Cloth is a versatile and essential fabric that has been used for
          centuries to create a wide range of products, from clothing to home
          furnishings. It is typically made by weaving or knitting fibers
          together, resulting in a durable and flexible material that can be
          tailored to suit various needs. Cloth comes in a variety of textures,
          colors, and patterns, allowing for endless design possibilities.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
          <button onClick={()=>{
            addToCart(product.id)
          }}>ADD TO CART</button>
          <p className="productdisplay-right-category"> <span>Category :</span> Women , Tshirt, Crop-Top</p>
          <p className="productdisplay-right-category"> <span>tags :</span> Modern , </p>
          
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
