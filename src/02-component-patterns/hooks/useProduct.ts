
import {useState, useEffect, useRef} from 'react'
import { onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product:Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
}

const useProduct = ({onChange, product, value = 0}:useProductArgs) =>{
    const [counter, setCounter] = useState(value);

    const isControlled = useRef(!!onChange)

    const increaseBy = (value: number) =>{
        if(isControlled.current){
            return onChange!({count: value, producto: product});
        }
        const newValue =  Math.max(counter + value,0)
        setCounter(newValue);
        onChange && onChange({count:newValue, producto: product});
    }

    useEffect(() => {
        setCounter(value);
        // console.log(counter)
    }, [value])



    return {counter, increaseBy}
}


export default useProduct;