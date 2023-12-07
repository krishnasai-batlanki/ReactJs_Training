import { Product } from "./product";

export interface ApiResponse<T>
{
    message:string;
    //data: Product | null | Product[]
    //can be decalred as below for declaring all types
    data: T | null;
}