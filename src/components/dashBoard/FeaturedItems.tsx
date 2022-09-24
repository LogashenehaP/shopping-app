import CardItemDetails from '../../data/CardItemDetails';
import SearchDisplay from '../common/SearchBar/SearchDisplay';
import { FeaturedBox, Heading } from './FeaturedItemStyle';
import { CardItem } from '../common/SearchBar/SearchStyle';
import { featuredContent, productDetails } from '../../resources/String';
import { FaRegSadCry } from 'react-icons/fa';

let count = 0,
  finalCount = 0;

export const FeaturedItems: React.FC = () => {
  return (
    <>
      <FeaturedBox>
        <Heading>{featuredContent.heading}</Heading>

        <CardItem>
          {CardItemDetails.map((product) => {
            product.isFeatured ? (count = 0) : (count = 1);
            if (count === 0) finalCount = 1;
            return (
              <>
                {product.isFeatured && (
                  <SearchDisplay
                    name={product.productName}
                    brand={product.productBrand}
                    price={product.productPrice}
                    rating={product.productRating}
                    image={product.productImage}
                  />
                )}
              </>
            );
          })}
        </CardItem>

        {finalCount === 0 && (
          <Heading>
            {productDetails.featuredItemMessage}
            <FaRegSadCry />
          </Heading>
        )}
      </FeaturedBox>
    </>
  );
};
