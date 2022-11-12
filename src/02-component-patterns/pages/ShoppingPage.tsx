

import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import useShoppingCart from '../hooks/useShoppingCart';
import { products } from '../data/products';
import '../styles/custom-styles.css';

// import { ProductCard } from '../components/ProductCard'
// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';







export const ShoppingPage = () => {

  const {shoppingCart, onProductCountChange}  = useShoppingCart();

  return (
    <div >
        <h1>Shopping Page</h1>
        <hr />
        <div   style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>


          {products.map((product)=>(
            <ProductCard key={product.id} value={shoppingCart[product.id]?.count || 0} onChange={onProductCountChange} product={product}  className='bg-dark text-white '>
                <ProductImage className="custom-image"/>
                <ProductTitle title='Cafe de starbucks 👍' className='text-bold'/>
                <ProductButtons className="custom-buttons" />
            </ProductCard>
          ))}
        </div>
        <div className='shopping-cart'>
            {
              Object.entries(shoppingCart).map(([key,product])=>(
                  <ProductCard key={key} value={product.count} onChange={onProductCountChange} product={product} style={{width: '100px'}} className='bg-dark text-white '>
                  <ProductImage className="custom-image"/>
                  <ProductButtons style={{display: 'flex',justifyContent: 'center'}} className="custom-buttons" />
                </ProductCard>
              ))
            }
            

            

        </div>
        <div>
          <code>
            {JSON.stringify(shoppingCart, null, 5)}
          </code>
        </div>
    </div>
  )
}
