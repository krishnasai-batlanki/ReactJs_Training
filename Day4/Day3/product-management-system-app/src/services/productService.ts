import axios from "axios";
import axiosInstance from "../config/axiosConfig";
import { ApiResponse } from "../models/apiResponse";
import { Product } from "../models/product";


export function getProducts() {
    return axiosInstance.get<ApiResponse<Product[]>>('products')
}

export function getProduct(id: number) {
    return axiosInstance.get<ApiResponse<Product[]>>(`products/${id}`)
}

export function deleteProduct(id: number) {
    return axiosInstance.delete<ApiResponse<Product[]>>(`products/${id}`)
}

export function updateProduct(id: number, p: Product) {
    return axiosInstance.put<ApiResponse<Product[]>>(`products/${id}`, p)
}
export function addProduct(p: Product) {
    return axiosInstance.put<ApiResponse<Product[]>>(`products`, p)
}

export function add()
{
    
}