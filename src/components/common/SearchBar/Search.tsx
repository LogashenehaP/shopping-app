import CardItemDetails from '../../../data/CardItemDetails';
import React from 'react';
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

import { sortSpace, filterSpace } from '../../../resources/String';
import { FaSearch, FaSort, FaFilter } from 'react-icons/fa';

export const Search: React.FC = () => {
  const [text, setText] = React.useState<string>('');

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
          {
          CardItemDetails.filter((product) =>
            product.productName.toLowerCase().includes(text.toLowerCase())
          ).map((product) => {
            return (
              <div key={product.id}>
                <SearchDisplay
                  name={product.productName}
                  brand={product.productBrand}
                  price={product.productPrice}
                  rating={product.productRating}
                  image={product.productImage}
                />
              </div>
            );
          })}
        </CardItem>
      </Container>
    </>
  );
};
