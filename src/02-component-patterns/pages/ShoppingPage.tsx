

import React from 'react'
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components'
// import { ProductCard } from '../components/ProductCard'
// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';


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
        <ProductCard product={product}>
              <ProductImage />
              <ProductTitle title='cafeee'/>
              <ProductButtons />
          </ProductCard>
          <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />
          </ProductCard>
          <ProductCard product={product}>
              <ProductCard.Image />
              <ProductCard.Title title='cafe2Card.'/>
              <ProductCard.Buttons />
          </ProductCard>
        </div>
    </div>
  )
}
