'use client'

import {usePathname, useSearchParams} from "next/navigation";
import {useRouter} from "next/navigation";
import {useCallback} from "react";




const products = () =>{
    const router = useRouter()
    const searchParams = useSearchParams();
    const pathname = usePathname()

    const color = searchParams.getAll("color");
    const price = searchParams.getAll("price");
    const available = searchParams.getAll("available");


    const createQueryString = useCallback(
        (name,value) =>{
            const params = new URLSearchParams(searchParams.toString());
            params.set(name,value);

            return params.toString();
        },[searchParams]
    )

    return(
        <>
            <button onClick={() => {
                router.push(pathname + '?' + createQueryString('color', 'blue'));
            }}>Blue
            </button>
            <button onClick={() => {
                router.push(pathname + '?' + createQueryString('price', 'low'));
            }}>Low
            </button>
            <button onClick={() => {
                router.push(pathname + '?' + createQueryString('available', 'yes'));
            }}>Available
            </button>
            <div>color: {color}</div>
            <div>price: {price}</div>
            <div>available: {available}</div>
        </>
    )
}

export default products;