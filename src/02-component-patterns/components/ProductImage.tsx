import {useContext} from 'react';
import { ProductContext } from './ProductCard';
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export interface ImageProps{
  className?:string;
  img?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({img = '', className, style}:ImageProps) =>{
    const {product} = useContext(ProductContext);
    let imgToShow = '';
    if(img){
      imgToShow = img;
    }else if (product.image) {
      imgToShow=  product.image;
    }else{
      imgToShow = noImage;
    }
    return (
      <img style={style} className={`${styles.productImg} ${className}`} src={imgToShow ? imgToShow : noImage} alt="Product" />
    )
}