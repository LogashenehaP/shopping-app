import CardItemDetails from '../../../data/CardItemDetails';
import SearchDisplay from '../../common/SearchBar/SearchDisplay';
import { FeaturedBox, Heading } from './FeaturedItemStyle';
import { CardItem } from '../../common/SearchBar/SearchStyle';
import { featuredContent, productDetails } from '../../../resources/String';
import { FaRegSadCry } from 'react-icons/fa';

let result = CardItemDetails.reduce((count, product) => {
  if (product.isFeatured === true) {
    count = count + 1;
  }
  return count;
}, 0);
console.log(result);
export const FeaturedItems: React.FC = () => {
  return (
    <>
      <FeaturedBox>
        <Heading>{featuredContent.heading}</Heading>

        <CardItem>
          {CardItemDetails.map((product, i) => {
            return (
              <>
                {product.isFeatured && (
                  <SearchDisplay
                    id={i}
                    name={product.productName}
                    brand={product.productBrand}
                    price={product.productPrice}
                    rating={product.productRating}
                    image={product.productImage}
                    featured={product.isFeatured}
                  />
                )}
              </>
            );
          })}
        </CardItem>

        {result === 0 && (
          <Heading>
            {productDetails.featuredItemMessage}
            <FaRegSadCry />
          </Heading>
        )}
      </FeaturedBox>
    </>
  );
};
