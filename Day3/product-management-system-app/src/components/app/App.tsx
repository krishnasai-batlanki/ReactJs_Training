import { useState } from 'react';
import { productRecords } from '../../repository/products';
import ProductList from '../products/product-list/ProductList';
import './App.css';


function App() {
  // let [productArray, setProductDetails] = useState(productRecords)
  return (
    <div className="App">
    <ProductList/>
    </div>
  );
}

export default App;
