import {useEffect, useState} from 'react';
import axios from 'axios';


const useGetProducts = (URL_API) => {
    const [products, setProducts] = useState([])
    useEffect(async () => {
        const response = await axios(URL_API);
        setProducts(response.data)
    },[])
    return products;
}
export default useGetProducts ;