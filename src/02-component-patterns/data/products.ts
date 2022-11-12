import { Product } from "../interfaces/interfaces"

const product1 = {
    id: '1',
    title: 'Coffer Mug - Card',
    image: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'Coffer Mug - Meme',
    image: './coffee-mug2.png'
}

export const products: Product[]  = [
    product1, product2
]