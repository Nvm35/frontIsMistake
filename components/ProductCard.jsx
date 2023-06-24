import { getDiscountedPricePercentage } from "@/utils/helper";
import Image from "next/image";
import Link from "next/link";
import React from "react";



const ProductCard = ({ data: { attributes: p, id } }) => {
  const API_URL = 'http://127.0.0.1:1337';

  return (
    <Link
      href={`/product/${p.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 
        cursor-pointer"
    >
      <Image height={500} width={500} src={`${API_URL}${p.thumbnail.data.attributes.url}`}
        alt={p.name} />
      <div className="p-4 text-black/[0.9]">
        <h2 className=" text-lg font-medium">{ p.name}</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8381;{p.price}</p>

          {p.original_price && (
            <>
              <p className="text-base font-medium line-through">&#8381;{ p.original_price}</p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(
                  p.original_price,
                  p.price
                )}% sale
            </p>
            </>
)}

        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
