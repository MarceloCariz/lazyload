
import {useState} from 'react'


interface Props {
    counter: number;
    increaseBy:(value: number) => void;
}

const useProduct = ():Props =>{
    const [counter, setCounter] = useState(0);


    const increaseBy = (value: number) =>{
        setCounter(prev => Math.max(prev + value,0));
    }



    return {counter, increaseBy}
}


export default useProduct;