import React from 'react'
import { Slider } from './Slider'
import { useMenuItems } from '../../hook/useMenuItems'
import { useApi } from '../../hook/useApi'
import  { useEffect, useState } from "react";




const JewelerySlider = () => {
    // const menuItems=[]
    // useMenuItems('category/jewelery')

    const { data } = useApi('products/category/jewelery');
    const[menuItems,setMenuItems]=useState([]);
    useEffect(()=>{
        if (data ) {
            setMenuItems(data);
            console.log('MenuItems actualizados:', menuItems);
        }
},[data])


    return (
        <Slider sectionTitle={'Jewelery'} items={menuItems}/>
    )
}

export default JewelerySlider
