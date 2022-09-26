
import CardItemDetails from '../../../data/CardItemDetails';
import React, { useEffect, useState } from 'react';
import SearchDisplay from './SearchDisplay';

import {
  Input,
  SearchSpace,
  SortSpace,
  FilterSpace,
  FilterDivision,
  CardItem,
  Container,
} from './SearchStyle';
import { mapProducts } from '../../utils/mapProducts';

import { sortSpace, filterSpace } from '../../../resources/String';
import { FaSearch, FaSort, FaFilter } from 'react-icons/fa';
import { Heading } from '../../dashBoard/FeaturedProducts/FeaturedItemStyle';
import { IndividualProductModel } from '../../../models/IndividualProductModel';

export const Search: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [products, setProducts] = useState<IndividualProductModel[] | null>(
    null
  );
  useEffect(() => {
    const mappedProducts = mapProducts(CardItemDetails);
    setProducts(mappedProducts);
  }, []);

  if (products === null) return <Heading>loading</Heading>;
  let displayProducts = products;
  if (text !== null) {
    const duplicateProducts = [...displayProducts];
    displayProducts = duplicateProducts.filter((product) =>
      product.productName.toLowerCase().includes(text.toLowerCase())
    );
  }

  return (
    <>
      <Container>
        <FilterDivision>
          <SearchSpace>
            <Input
              type="text"
              placeholder="Search Product"
              onChange={(e) => setText(e.target.value)}
            ></Input>
            <FaSearch />
          </SearchSpace>
          <SortSpace>
            {sortSpace.sortHeading}
            <FaSort />
          </SortSpace>
          <FilterSpace>
            {filterSpace.filterHeading}
            <FaFilter />
          </FilterSpace>
        </FilterDivision>
        <CardItem>
          {displayProducts.length !== 0 &&
            displayProducts.map((product, i) => {
              return (
                <SearchDisplay
                  key={i}
                  id={i}
                  name={product.productName}
                  brand={product.productBrand}
                  price={product.productPrice}
                  rating={product.productRating}
                  image={product.productImage}
                  featured={product.isFeatured}
                />
              );
            })}
          {displayProducts.length === 0 && <Heading>No Products Found</Heading>}
        </CardItem>
      </Container>
    </>
  );
};
