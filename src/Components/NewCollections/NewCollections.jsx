import React, { useContext } from 'react'
import "./NewCollections.css"
import Item from '../Item/Item'
import { ShopContext } from '../../Context/ShopContext'

const NewCollections = () => {
  const { all_product } = useContext(ShopContext)
  // show a selection of latest/new collections (example: newest 8 items)
  const newest = all_product.slice(0, 8)
  return (
    <div className='newcollections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className='collections'>
        {newest.map((item) => {
          return <Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        })}
      </div>
    </div>
  )
}

export default NewCollections