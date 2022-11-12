import React from 'react'
import './Product.css'

function Product(props) {
  return (
    <div className="product-container">
        <div className="">
          <a href={props.link} >
            <div className="product-image-container">
                <img src={props.src} alt={props.alt} width="200px" />
            </div>
            <div className="product-description">
              <h4 className="product-name">{props.product_name}</h4>
              <h3 className="product-price">₹ {props.product_price}</h3>
            </div>
          </a>
        </div>
        {/* <div className="tag">Pre Owned</div>  */}
    </div>
  )
}

export default Product