import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'





const ShopCategory =(props)=>{
    const {all_Product} = useContext(ShopContext)
    console.log(props)
    return (
        <div className='shop-category'>
            <img className='shopcategory-banner' src={props.banner} alt="" />
            <div className="shopcategory-indexShort">
                <p>
                    <span>Showing 1-12 </span> out of 35 producrs
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_Product.map((item,i)=>{
                    console.log(item.category)
                    if(props.category=== item.category){
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    }
                    else {
                        return null;
                    }
                })}
               
            </div>
            <div className="shopcategory-loadmore">
                Explore More
            </div>
        </div>
    )
}

export default ShopCategory
