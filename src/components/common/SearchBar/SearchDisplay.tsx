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
  name: string;
  brand: string;
  price: number;
  rating: number;
  image: string;
}
const SearchDisplay: React.FC<AppProps> = ({
  name,
  brand,
  price,
  rating,
  image,
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
