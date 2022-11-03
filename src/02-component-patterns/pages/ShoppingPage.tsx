

import React from 'react'
import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import '../styles/custom-styles.css'
// import { ProductCard } from '../components/ProductCard'
// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';


const product = {
    id: '1',
    title: 'Coffer Mug - Card',
    image: './coffee-mug.png'
}


export const ShoppingPage = () => {
  return (
    <div >
        <h1>Shopping Page</h1>
        <hr />
        <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>


        <ProductCard product={product} className='bg-dark text-white '>
              <ProductImage className="custom-image"/>
              <ProductTitle title='Cafe de starbucks 👍' className='text-bold'/>
              <ProductButtons className="custom-buttons" />
          </ProductCard>



          <ProductCard product={product}>
              <ProductCard.Image className="custom-image"/>
              <ProductCard.Title title='Cafe de starbucks 😎😎😎😎' className='text-bold'/>
              <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
          <ProductCard product={product} style={{backgroundColor: 'black'}} >
              <ProductCard.Image style={{}} />
              <ProductCard.Title style={{color: 'yellow'}}/>
              <ProductCard.Buttons className="custom-buttons" style={{backgroundColor: 'yellow'}}/>
          </ProductCard>
        </div>
    </div>
  )
}
