import { image } from '../resources/Images';
import { productDetails } from '../resources/String';

const CardItemDetails: {
  id: number;
  productName: string;
  isFeatured: boolean;
  productBrand: string;
  productRating: number;
  productImage: string;
  productPrice: number;
}[] = [
  {
    id: 1,
    productName: productDetails.appleWatchName,
    isFeatured: false,
    productBrand: productDetails.appleBrand,
    productRating: productDetails.appleWatchRating,
    productPrice: productDetails.appleWatchPrice,
    productImage: image.appleWatch,
  },

  {
    id: 2,
    productName: productDetails.fastTrackWatchName,
    isFeatured: false,
    productBrand: productDetails.fastTrackBrand,
    productRating: productDetails.fastTrackWatchRating,
    productPrice: productDetails.fastTrackWatchPrice,
    productImage: image.fastTrackWatch,
  },
  {
    id: 3,
    productName: productDetails.casioWatchName,
    isFeatured: false,
    productBrand: productDetails.casioBrand,
    productRating: productDetails.casioWatchRating,
    productPrice: productDetails.casioWatchPrice,
    productImage: image.casioWatch,
  },
  {
    id: 4,
    productName: productDetails.appleMobileName,
    isFeatured: true,
    productBrand: productDetails.appleBrand,
    productRating: productDetails.appleMobileRating,
    productPrice: productDetails.appleMobilePrice,
    productImage: image.appleMobile,
  },
  {
    id: 5,
    productName: productDetails.vivoMobileName,
    isFeatured: false,
    productBrand: productDetails.vivoBrand,
    productRating: productDetails.vivoMobileRating,
    productPrice: productDetails.vivoMobilePrice,
    productImage: image.vivoMobile,
  },
  {
    id: 6,
    productName: productDetails.onePlusMobileName,
    isFeatured: false,
    productBrand: productDetails.onePlusBrand,
    productRating: productDetails.onePlusMobileRating,
    productPrice: productDetails.onePlusMobilePrice,
    productImage: image.onePlusMobile,
  },
  {
    id: 7,
    productName: productDetails.appleLapName,
    isFeatured: false,
    productBrand: productDetails.appleBrand,
    productRating: productDetails.appleLapRating,
    productPrice: productDetails.appleLapPrice,
    productImage: image.appleLaptop,
  },
  {
    id: 8,
    productName: productDetails.dellLapName,
    isFeatured: true,
    productBrand: productDetails.dellBrand,
    productRating: productDetails.dellLapRating,
    productPrice: productDetails.dellLapPrice,
    productImage: image.dellLaptop,
  },
  {
    id: 9,
    productName: productDetails.lenovoLapName,
    isFeatured: false,
    productBrand: productDetails.lenovoBrand,
    productRating: productDetails.lenovoLapRating,
    productPrice: productDetails.lenovoLapPrice,
    productImage: image.lenovoLaptop,
  },
  {
    id: 10,
    productName: productDetails.appleAirPodName,
    isFeatured: false,
    productBrand: productDetails.appleBrand,
    productRating: productDetails.appleAirPodRating,
    productPrice: productDetails.appleAirPodPrice,
    productImage: image.appleAirPods,
  },
  {
    id: 11,
    productName: productDetails.boatAirPodName,
    isFeatured: false,
    productBrand: productDetails.boatBrand,
    productRating: productDetails.boatAirPodRating,
    productPrice: productDetails.boatAirPodPrice,
    productImage: image.boatAirPods,
  },
  {
    id: 12,
    productName: productDetails.jblAirPodName,
    isFeatured: false,
    productBrand: productDetails.jblBrand,
    productRating: productDetails.jblAirPodRating,
    productPrice: productDetails.jblAirPodPrice,
    productImage: image.jblAirPods,
  },
  {
    id: 13,
    productName: productDetails.miTvName,
    isFeatured: false,
    productBrand: productDetails.miBrand,
    productRating: productDetails.miTvRating,
    productPrice: productDetails.miTvPrice,
    productImage: image.miTv,
  },
  {
    id: 14,
    productName: productDetails.sonyTvName,
    isFeatured: false,
    productBrand: productDetails.sonyBrand,
    productRating: productDetails.sonyTvRating,
    productPrice: productDetails.sonyTvPrice,
    productImage: image.sonyTv,
  },
  {
    id: 15,
    productName: productDetails.samsungTvName,
    isFeatured: true,
    productBrand: productDetails.samsungBrand,
    productRating: productDetails.samsungTvRating,
    productPrice: productDetails.samsungTvPrice,
    productImage: image.samsungTv,
  },
];
export default CardItemDetails;
