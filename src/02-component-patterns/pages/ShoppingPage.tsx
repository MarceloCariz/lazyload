

import { ProductButtons, ProductImage, ProductTitle, ProductCard } from '../components';
import { products } from '../data/products';
import '../styles/custom-styles.css';

// import { ProductCard } from '../components/ProductCard'
// import { ProductButtons, ProductCard, ProductImage, ProductTitle } from '../components/ProductCard';


const product = products[0];




export const ShoppingPage = () => {


  return (
    <div >
        <h1>Shopping Page</h1>
        <hr />
        {/* <div   style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}> */}
            <ProductCard key={product.id}  product={product}  
                initialValues={{count: 6, maxCount: 10}}
                className='bg-dark text-white '>
                  {
                    ({reset, count, isMaxCountReached, increaseBy, maxCount}) => (
                        <>
                          <ProductImage className="custom-image"/>
                          <ProductTitle title='Cafe de starbucks 👍' className='text-bold'/>
                          <ProductButtons  className="custom-buttons" />
                          <button onClick={reset}>Reset</button>
                          <button onClick={() => increaseBy(-2)}> - 2 </button>
                          {!isMaxCountReached && (
                            <button onClick={() => increaseBy(2)}> + 2 </button>
                          )}
                          <span>{count} - {maxCount} </span>
                        </>
                    )
                  }
            </ProductCard>
        {/* </div> */}
    </div>
  )
}
