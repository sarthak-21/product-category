import React from 'react'
import Product from './Product';
import './Row.css'

function Row(props) {
  return (
    <div className="row">
      <h2 className="row_title">{props.title}</h2>
      <div className="row_posters">
        <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_271059ad5f804ddfbcf5e2b846400f74~mv2.jpeg"
          product_alt="Injustice_2_PS4"
          link=""
          product_name="Injustice 2 PS4"
          product_price="599"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
          <Product 
          src="https://static.wixstatic.com/media/621e45_b84a1878a1544f16a5797ae813572ae5~mv2.jpeg"
          product_alt="Death_stranding_PS4"
          link=""
          product_name="Death Stranding PS4"
          product_price="699"
          />
        </div>
    </div>
  )
}

export default Row