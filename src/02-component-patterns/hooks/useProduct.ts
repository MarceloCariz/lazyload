
import {useState, useEffect, useRef, } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/interfaces';


interface useProductArgs {
    product:Product;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

const useProduct = ({onChange, product, value = 0, initialValues}:useProductArgs) =>{
    const [counter, setCounter] = useState<number>(initialValues?.count || value);

    // const isControlled = useRef(!!onChange)
    // Ver si el componente esta montado
    // console.log(initialValues?.count)
    const isMounted = useRef(false);

    const increaseBy = (value: number) =>{
        let newValue =  Math.max(counter + value,0)
        if(initialValues?.maxCount ) newValue = Math.min(newValue, initialValues.maxCount);
        setCounter(newValue);
        onChange && onChange({count:newValue, producto: product});
    }



    const reset = () => {
        setCounter(initialValues?.count || value);
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setCounter(value);
        isMounted.current = true;
        // console.log(counter)
    }, [value]);







    return {counter, increaseBy, maxCount: initialValues?.maxCount, 
        isMaxCountReached: !!initialValues?.maxCount && initialValues.maxCount === counter,
        reset,
    };
}


export default useProduct;