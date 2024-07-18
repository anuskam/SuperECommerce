import { ICategory } from "./icategory";

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    creationAt: string;
    updatedAt: string;
    category: ICategory;
}
