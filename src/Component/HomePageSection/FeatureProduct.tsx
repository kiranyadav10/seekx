import React from 'react'
import { trendingTshirts } from '../../Data';
import ProductCrad from '../ProductCrad';

const FeatureProduct = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-1 gap-x-1 py-5 gap-y-10">
    {trendingTshirts?.slice(0,4)?.map((data: any, idx: number) => {
      return (
        <ProductCrad
          name={data?.name}
          nameLineSec={data?.nameLineSec}
          price={data?.price}
          actualPrice={data?.actualPrice}
          img={data?.img}
        />
      );
    })}
  </div>
  )
}

export default FeatureProduct