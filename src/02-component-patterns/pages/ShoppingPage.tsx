

import React from 'react'
import { ProductCard } from '../components/ProductCard';


const product = {
    id: '1',
    title: 'Coffer Mug - Card',
    image: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Page</h1>
        <hr />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
            <ProductCard product={product} />
            <ProductCard product={product}/>
            <ProductCard product={product}/>
            <ProductCard product={product}/>
        </div>
    </div>
  )
}
