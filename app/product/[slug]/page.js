"use client"
import ProductDetailsCarousel from '@/components/ProductDetailsCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import Wrapper from '@/components/Wrapper'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'

const ProductDetails = () => {
    return (
        <div className="w-full md:py-20">

            <Wrapper>

                <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
                    {/* left column start */}
                    <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
                        <ProductDetailsCarousel />
                    </div>
                    {/* left column end */}

                    {/* right column start */}
                    <div className="flex-[1] py-3">
                        {/* PRODUCT TITLE */}
                        <div className="text-[34px] font-semibold mb-2 leading-tight">
                            Jordan Retro 6 G
                        </div>

                        {/* PRODUCT SUBTITLE */}
                        <div className="text-lg font-semibold mb-5">
                            Men&apos;s Gold Shoes
                        </div>

                        {/* PRODUCT PRICE */}
                        <div className="flex items-center">
                            <p className="mr-2 text-lg font-semibold">
                                25000</p>
                        </div>

                        <div className="text-md font-medium text-black/[0.5]">
                            incl. of taxes
                        </div>
                        <div className="text-md font-medium text-black/[0.5] mb-20">
                            {`(Also includes all applicable duties)`}
                        </div>

                        {/* PRODUCT SIZE RANGE START */}
                        <div className="mb-10">
                            {/* HEADING START */}
                            <div className="flex justify-between mb-2">
                                <div className="text-md font-semibold">
                                    Select Size
                                </div>
                                <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                                    Select Guide
                                </div>
                            </div>
                            {/* HEADING END */}


                            <div
                                id="sizesGrid"
                                className="grid grid-cols-3 gap-2"
                            >
                            </div>
                        </div>

                        <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium 
                        transition-transform active:scale-95 mb-3 hover:opacity-75">
                            Add to Cart
                        </button>
                        <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform 
                        active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                            Whishlist
                            <IoMdHeartEmpty size={20} />
                        </button>

                        <div>
                            <div className="text-lg font-bold mb-5">
                                Product Details
                            </div>
                            <div className="markdown text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis commodo elit, quis fringilla turpis. Morbi tincidunt libero vel sollicitudin laoreet. Nulla sit amet molestie arcu. Nulla dignissim mi maximus lorem finibus placerat. Maecenas condimentum ac risus ut faucibus. Nam semper mattis laoreet. Integer ac finibus est. Donec vitae magna sed urna malesuada pretium mattis eget lorem. Fusce sagittis eu velit ac aliquet. Nulla vitae urna ac enim ultricies feugiat. Suspendisse laoreet, nunc id tempor bibendum, neque velit feugiat erat, eu luctus ligula diam ut nulla. Cras pharetra diam vel purus commodo, in tristique velit varius.
                            </div>
                            <div className="markdown text-md mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis commodo elit, quis fringilla turpis. Morbi tincidunt libero vel sollicitudin laoreet. Nulla sit amet molestie arcu. Nulla dignissim mi maximus lorem finibus placerat. Maecenas condimentum ac risus ut faucibus. Nam semper mattis laoreet. Integer ac finibus est. Donec vitae magna sed urna malesuada pretium mattis eget lorem. Fusce sagittis eu velit ac aliquet. Nulla vitae urna ac enim ultricies feugiat. Suspendisse laoreet, nunc id tempor bibendum, neque velit feugiat erat, eu luctus ligula diam ut nulla. Cras pharetra diam vel purus commodo, in tristique velit varius.
                            </div>

                        </div>


                    </div>

                </div>
                <RelatedProducts />
            </Wrapper>,

        </div>
    )
}

export default ProductDetails;

