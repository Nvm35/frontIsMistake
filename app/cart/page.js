import CartItem from '@/components/CartItem'
import Wrapper from '@/components/Wrapper'
import React from 'react'

const Cart = () => {
    return (
        <div className='w-full md:py-20'>
            <Wrapper>
                {/* Heading and Paraghraph */}
                <div className=' text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
                    <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'>
                        Shopping Cart
                    </div>
                </div>
                {/* Heading and Paraghraph end*/}

                {/* CART CONTENT START */}

                <div className='flex flex-col lg:flex-row gap-12 py-10'>
                    {/* CART ITEMS START */}
                    <div className='flex-[2]'>
                        <div className='text-lg font-Urbanist font-bold'>
                            Cart Items</div>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </div>
                    {/* CART ITEMS END */}

                    {/* Summary  START */}
                    <div className='flex-[1]'>
                        <div className='text-lg font-Urbanist font-bold'>
                            Summary
                        </div>

                        <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
                            <div className="flex justify-between">
                                <div className="uppercase text-md md:text-lg font-medium text-black">
                                    Subtotal
                                </div>
                                <div className="text-md md:text-lg font-medium text-black">
                                    Rub 69999
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Sum ENDS */}

                </div>
                {/* CART CONTENT ENDS */}
            </Wrapper>

        </div>

    )
}

export default Cart