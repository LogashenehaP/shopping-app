import { IndividualProductModel } from '../../models/IndividualProductModel';

export const mapProducts = (products: any[]): IndividualProductModel[] => {
  const allProducts = [] as IndividualProductModel[];

  if (!products.length) {
    return allProducts;
  }

  return products.map((product, i) => {
    return {
      productId: i,
      productName: product.productName,
      productImage: product.productImage,
      productPrice: product.productPrice,
      productRating: product.productRating,
      productBrand: product.brand,
      isFeatured: product.isFeatured,
    } as IndividualProductModel;
  });
};
