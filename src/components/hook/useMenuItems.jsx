import {useApi} from "./useApi";
import  { useEffect, useState } from "react";


export const useMenuItems=(endPoint)=>{
    const { data } = useApi(endPoint);
    const[menuItems,setMenuItems]=useState([]);
    useEffect(()=>{
        if (data ) {
            setMenuItems(data);
            console.log('MenuItems actualizados:', menuItems);
        }
},[data])

}
