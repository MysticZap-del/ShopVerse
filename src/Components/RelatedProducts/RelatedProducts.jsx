import React, { useContext } from 'react'
import "./RealatedProducts.css"
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const RelatedProducts = ({ product }) => {
  const { all_product } = useContext(ShopContext)
  if (!product) return null
  const related = all_product.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4)
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {related.map((item) => {
          return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts