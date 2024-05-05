import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/Breadcrum/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import { Descriptionbox } from '../Components/Descriptionbox/Descriptionbox';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct';

const Product=()=>{
    const {all_Product} =useContext(ShopContext);
    const {productId} = useParams();
    const product = all_Product.find((e)=>e.id === Number(productId))
    console.log(product)
    return (
        <div>
            <Breadcrum product ={product}/>
            <ProductDisplay product={product}/>
            <Descriptionbox/>
            <RelatedProduct/>
        </div>
    )
}

export default Product
