import { ReactElement } from "react";
import { ButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardProps} from "../components/ProductCard";
import { ImageProps } from "../components/ProductImage";
import { TitleProps } from "../components/ProductTitle";

// export interface ProductCardProps{
//     product: Product;
//     children?: ReactElement | ReactElement[];
// }

export  interface Product {
    id:string;
    title: string;
    image?: string;
} 

export  interface ProductContextProps{
    counter: number;
    product: Product;
    increaseBy: (value: number) => void;
    
}


export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps): JSX.Element;
    Title: (Props: TitleProps) => JSX.Element;
    Image: (Props: ImageProps) => JSX.Element;
    Buttons: (Props:ButtonsProps) => JSX.Element;
}


export interface onChangeArgs{
    producto: Product;
    count: number;
}

export interface ProductInCart extends Product {
    count: number;
}