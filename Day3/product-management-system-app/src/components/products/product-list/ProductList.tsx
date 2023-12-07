import React, { useState } from 'react'
import { Product } from '../../../models/product'
import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { productRecords } from '../../../repository/products';
import ProductRow from './ProductRow';
import { getProducts } from '../../../services/productService';

type productInfoList = {
   product: Product[];

}
function ProductList() {
    //productArrayApiResponse = getProducts()
    let [productArray, setProductDetails] = useState(productRecords)
  return (
    <div>ProductList
        <br />
        <br />
         {
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Image</TableCell>
              <TableCell align="left">Product Name&nbsp;</TableCell>
              <TableCell align="left">Product Rating&nbsp;</TableCell>
              <TableCell align="left">Product Description&nbsp;</TableCell>
              <TableCell align="left">Delete Button&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productArray.map((p) => (
            <ProductRow productProps= {p} key={p.productId}/>

            ))}
          </TableBody>
        </Table>
      </TableContainer>
         }
    </div>
   
  )
}

export default ProductList