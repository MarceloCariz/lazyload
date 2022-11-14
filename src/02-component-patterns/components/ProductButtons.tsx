import {useCallback, useContext} from 'react';
import { ProductContext } from './ProductCard';
import styles from '../styles/styles.module.css';


export interface ButtonsProps{
    className?: string;
    style?: React.CSSProperties;
}

export const ProductButtons = ({className, style}:ButtonsProps)=>{

    const {increaseBy, counter, maxCount} = useContext(ProductContext);

    const isMaxReached = useCallback(() => !!maxCount && counter === maxCount, [counter, maxCount])
    return(
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button onClick={() => increaseBy(-1)} className={styles.buttonMinus}>-</button>
            <div className={styles.countLabel}>
                {counter}
            </div>
            <button  style={isMaxReached() ? {color: 'red'} : {}} onClick={() => increaseBy(1)} className={`${styles.buttonAdd}`}>+</button>
          </div> 
        )
}