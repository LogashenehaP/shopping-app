import {
  IndividualCard,
  ImageWrapper,
  ProductImage,
  ParaTag,
  HeadingTag,
} from "./SearchStyle";

import { FaStar } from "react-icons/fa";
import React from "react";
interface AppProps {
  id:number
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
  featured:boolean
}
const SearchDisplay: React.FC<AppProps> = ({
  id,
  name,
  brand,
  price,
  rating,
  image,
  featured
}: AppProps) => {
  return (
    <IndividualCard>
      <ImageWrapper>
        <ProductImage src={image} />
      </ImageWrapper>
      <HeadingTag>{name}</HeadingTag>
      <ParaTag>Brand:{brand}</ParaTag>
      <ParaTag>${price}</ParaTag>
      <ParaTag>
        <FaStar /> {rating}
      </ParaTag>
    </IndividualCard>
  );
};

export default SearchDisplay;
