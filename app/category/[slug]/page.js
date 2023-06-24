'use client'
import ProductCard from '@/components/ProductCard'
import Wrapper from '@/components/Wrapper'
import { fetchDataFromApi } from '@/utils/api';
import React, { useState, useEffect } from 'react'
import { API_URL, STRAPI_API_TOKEN } from '@/utils/urls';




const Category = ({ params }) => {


    const [data, setData] = useState([]);

    useEffect(() => {
        // const res = fetch(`${API_URL}/api/categories?filters[slug][$eq]=${params.slug}`, settings)
        // const res = fetchDataFromApi(`/api/categories?filters[slug][$eq]=${params.slug}`)

        const settings = {
            method: "GET",
            headers: {
                Authorization: "Bearer " + STRAPI_API_TOKEN
            },
        };  

        fetch(`${API_URL}jordan`, settings)


        fetchDataFromApi(`/api/categories?filters[slug][$eq]=${params.slug}`)
            .then((r) => setData(r.data))
        console.log(data)
        // fetchProducts();

    }, []);


    // const fetchProducts = async () => {
    //     const r = await ;

    //     setData(r.data)
    // }

    //   return fetcher.post(${baseUrl}/authenticate, { username, password })
    //   .then(user => {
    //       user.authdata = window.btoa(username + ':' + password);
    //       userSubject.next(user);
    //       localStorage.setItem('user', JSON.stringify(user));

    //       return user;
    //   });


    console.log(params.slug)




    return (
        <div className=' w-full md:py-20 relative'>
            <Wrapper>
                <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                        {data?.data?.[0]?.attributes?.name}
                    </div>
                </div>

                {/* products grid start */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
                    {data?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                </div>
                {/* products grid ends */}



            </Wrapper>
        </div>
    )
}

export default Category