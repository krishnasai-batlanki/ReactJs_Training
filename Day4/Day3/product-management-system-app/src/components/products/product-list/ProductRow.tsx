import { TableRow, TableCell } from '@mui/material'
import React from 'react'
import { Product } from '../../../models/product'

type productProps =
{
    productProps:Product
}
const ProductRow = (props:productProps) => {
    const {productProps} =props
  return (

        <TableRow 
  key={props.productProps.productId}
  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
>
  <TableCell align="left"><img src={productProps.imageUrl} width="50" height="50"></img></TableCell>
  <TableCell align="left">{productProps.productName}</TableCell>
  <TableCell align="left">{productProps.starRating}</TableCell>
  <TableCell align="left">{productProps.description}</TableCell>
  <TableCell align="left"><button type="button" onClick={
    () =>
    {
        
    }
  }>Delete</button></TableCell>
</TableRow>

  )
}

export default ProductRow