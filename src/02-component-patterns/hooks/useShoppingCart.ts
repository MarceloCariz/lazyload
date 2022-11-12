import {useState} from 'react';
import { Product, ProductInCart } from '../interfaces/interfaces';




const useShoppingCart = () =>{
    
    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({});

    const onProductCountChange = ({count, producto}:{count:number, producto: Product}) =>{

        setShoppingCart(oldShoppingCart => {
        const productInCart: ProductInCart = oldShoppingCart[producto.id] || {...producto, count: 0}; // Si el producto con el id existe devuelve el objeto con el producto en shopping Cart

        if(Math.max(productInCart.count + count, 0) > 0){ // Si todo esto es mayor a 0
            productInCart.count += count;
            return {...oldShoppingCart, [productInCart.id]: productInCart};
        }

        /// Borra el producto

        const {[producto.id]: toDelete, ...rest} = oldShoppingCart; /// Con objetos se puede eliminar asi BKN
        return rest;
        })
    }

    return { onProductCountChange, shoppingCart};
}


export default useShoppingCart;
