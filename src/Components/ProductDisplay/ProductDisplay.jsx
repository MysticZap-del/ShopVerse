import React, { useContext, useState } from 'react'
import "./ProductDisplay.css"
import star_icon from "../../assets/star_icon.png"
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from '../../Context/ShopContext';
const ProductDisplay = (props) => {
  const { product } = props;
  const { addTocart } = useContext(ShopContext);
  const { getTotalCartItems } = useContext(ShopContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addTocart(product.id, selectedSize);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
          <img src={product.image} alt="" height="150px" />
        </div>
        <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt="" height="300px" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_icon} alt="" height="20px" />
          <img src={star_dull_icon} alt="" height="20px" />
          <p>(130)</p>
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic autem, rem corrupti quibusdam? Quam omnis saepe et expedita ratione, quasi unde repudiandae.
        </div>
        <div className='productdisplay-right-size'>
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
              <div
                key={size}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button onClick={handleAddToCart}>ADD TO CART</button>
        {showPopup && (
          <div className="cart-popup">
            <p>✓ Added to cart!</p>
            <p>Total items: <strong>{getTotalCartItems()}</strong></p>
          </div>
        )}
        <div className="productdisplay-right-category">
          <span>Category:<span>Women ,T-Shirt , Crop Top</span></span>
        </div>
        <div className="productdisplay-right-category">
          <span>Tags:<span>Modern ,Latest , Trend Shorts</span></span>
        </div>
      </div>
    </div>

  )
}

export default ProductDisplay