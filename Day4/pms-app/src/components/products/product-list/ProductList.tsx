import { Component } from 'react'
import { Product } from '../../../models/product'
import { productRecords } from '../../../repository/products'
import ProductRow from '../product-row/ProductRow'
import './ProductList.css'
import { getProducts } from '../../../services/productservice'
import { ApiResponse } from '../../../models/apiresponse'

type ProductListPropType = {}
type ProductListStateType = {
    productlist: Product[] | undefined,
    isRequestComplete: boolean,
    errorMessage: string
}

class ProductList extends Component<ProductListPropType, ProductListStateType> {

    //state initialization
    state: Readonly<ProductListStateType> = {
        productlist: undefined,
        isRequestComplete: false,
        errorMessage: ''
    }

    updateState = () => {
        getProducts()
            .then(
                (resp) => {
                    const apiResponse = resp.data

                },
                (err: Error) => {

                }
            )
    }
    render() {

        const { productlist, isRequestComplete, errorMessage } = this.state
        let design: any;
        console.log(isRequestComplete)
        if (!isRequestComplete) {
           // window.alert('if')
            design = <span>Loading...please wait</span>
        } else if (errorMessage !== '') {
            //window.alert('else if')
            design = <span>{errorMessage}</span>
        } else if (!productlist) {
           // window.alert('second else if')
            design = <span>no record found</span>
        } else {
           // window.alert('else')
            design = (
                <div className='container container-fluid'>
                    <h2 className='text-dark'>
                        List of {productlist.length} Products:
                    </h2>
                    <br />
                    <table className='table table-hover'>
                        <thead className='table table-dark'>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Rating</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody className='table-light'>
                            {
                                productlist.map(
                                    (p) => <ProductRow key={p.productId} productData={p} />
                                )
                            }
                        </tbody>
                    </table>
                </div>
            )
        }

        return design
    }

async componentDidMount() {
    try{
         const resp = await getProducts()
         //console.log(resp.data.data)
        this.setState(
            {
                isRequestComplete : true,
                errorMessage :'',
                productlist : resp.data.data? resp.data.data  as Product[]:undefined
              
            }
        )
    }
    catch(err: any)
    {
        this.setState(
            {
                isRequestComplete : true,
                errorMessage :err,
                productlist : undefined
              
            }
        )
    }
}
    
}
    

export default ProductList