import styles from '../styles/styles.module.css';
import useProduct from '../hooks/useProduct';
import { createContext ,CSSProperties, ReactElement} from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';
// import  {ProductButtons, ProductImage, ProductTitle} from './index';



export const ProductContext = createContext({} as ProductContextProps);
const {Provider} = ProductContext;
export interface Props{
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({children,product, className, style}:Props) => {

  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{counter, increaseBy, product}}>
      <div style={style} className={`${styles.productCard} ${className}`} >
        {children}
      </div>
    </Provider>
  )
};



