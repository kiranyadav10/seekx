import React from 'react'
import { DataArr } from '../../Data';
import CategoryCard from '../ReusableCom/CategoryCard';

export const CatCards = () => {
  return (
    <div className="flex flex-row gap-8 justify-center flex-wrap">
    {DataArr?.map((cardData: any, idx: number) => {
      return (
        <CategoryCard
          key={idx}
          name={cardData?.name}
          src={cardData?.src}
        />
      );
    })}
  </div>
  )
}
