import React, { useContext } from 'react'
import "./Popular.css"
import Item from "../Item/Item"
import { ShopContext } from '../../Context/ShopContext'

const Popular = () => {
  const { all_product } = useContext(ShopContext)
  // show popular items for women (first 4 matching)
  const popular = all_product.filter(p => p.category === 'women').slice(0, 4)
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {popular.map((item, i) => {
          return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default Popular