import  Category  from './Category';

export default interface Book {
    id: number;
    title: string;
    description: string;
    price: number;
    authors: string[];
    categories: Category[];
    image: string;
    discount?: number;
}