import { FaHeadphones } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { LuPhone, LuAtSign } from 'react-icons/lu';
import servicesImg1 from './assets/images/home-page/servicesImg1.png';
import servicesImg2 from './assets/images/home-page/servicesImg2.png';
import servicesImg3 from './assets/images/home-page/servicesImg3.png';
import servicesImg4 from './assets/images/home-page/servicesImg4.png';
import productImg from './assets/images/categories/categoryImg2.png';
import {
  IoHomeOutline,
  IoFastFoodOutline,
  IoImagesOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

///*** HEADER DATA ***///

export const mobileNavbarLinks = [
  {
    id: 1,
    title: 'Cart',
    icon: <FiShoppingCart />,
    href: '/cart',
  },
  {
    id: 2,
    title: 'Support',
    icon: <FaHeadphones />,
    href: '/support',
  },
  {
    id: 3,
    title: 'Home',
    icon: <IoHomeOutline />,
    href: '/',
  },
  {
    id: 4,
    title: 'Menu',
    icon: <IoFastFoodOutline />,
    href: '/products',
  },
  {
    id: 5,
    title: 'Gallery',
    icon: <IoImagesOutline />,
    href: '/gallery',
  },
];

export const desktopNavbarLinks = [
  { id: 1, title: 'HOME', href: '/' },
  { id: 2, title: 'MENU', href: '/products' },
  { id: 3, title: 'ABOUT US', href: '/about-us' },
  { id: 4, title: 'GALLERY', href: '/gallery' },
  { id: 5, title: 'SUPPORT', href: '/support' },
];

///*** FOOTER DATA ***///

export const contactListItems = [
  {
    id: 1,
    href: '#',
    value: '5 Rue Dalou, 75015 Paris',
    icon: <IoLocationOutline />,
  },
  { id: 2, href: '#', value: '+33 156 78 89 56', icon: <LuPhone /> },
  { id: 3, href: '#', value: 'benoit@mail.com', icon: <LuAtSign /> },
];

export const socials = [
  { id: 1, href: '#', icon: <FaTwitter /> },
  { id: 2, href: '#', icon: <FaFacebookF /> },
  { id: 3, href: '#', icon: <FaLinkedinIn /> },
  { id: 4, href: '#', icon: <FaInstagram /> },
];

///*** HOME PAGE DATA ***///

export const servicesItemsArray = [
  {
    id: 1,
    title: 'Fresh Products',
    description: 'For each dish, the growth of every element & the selection',
    img: servicesImg1,
    href: '#',
  },
  {
    id: 2,
    title: 'Fresh Products',
    description: 'For each dish, the growth of every element & the selection',
    img: servicesImg2,
    href: '#',
  },
  {
    id: 3,
    title: 'Fresh Products',
    description: 'For each dish, the growth of every element & the selection',
    img: servicesImg3,
    href: '#',
  },
  {
    id: 4,
    title: 'Fresh Products',
    description: 'For each dish, the growth of every element & the selection',
    img: servicesImg4,
    href: '#',
  },
];

export const menuItems = [
  {
    id: 1,
    title: 'Raw Scallops from Erquy',
    ingredients: 'Candied Jerusalem artichokes, truffle',
    price: 38,
  },
  {
    id: 2,
    title: 'Sea Bass Ceviche',
    ingredients: 'Avocado, butternut, lime',
    price: 36,
  },
  {
    id: 3,
    title: 'Tender Octopus and Fennel',
    ingredients: 'Citrus, wild rocket condiment',
    price: 38,
  },
  {
    id: 4,
    title: 'Thinly Sliced Brittany Artichokes',
    ingredients: 'Citrus, wild rocket condiment',
    price: 42,
  },
  {
    id: 5,
    title: 'Celeriac and Truffle Ravioli',
    ingredients: 'Roasted langoustine, consommé',
    price: 32,
  },
  {
    id: 6,
    title: 'Viennese Veal Cutlet',
    ingredients: 'Ricotta and spinach gnocchi, Caccio de Pepe',
    price: 38,
  },
  {
    id: 7,
    title: 'Corrèze Pan-seared Veal Liver',
    ingredients: 'Olive oil mashed potato, onion jus',
    price: 36,
  },
  {
    id: 8,
    title: 'Cod Filet Cooked on One Side',
    ingredients: 'Chorizo, chickpea espuma, pequillos',
    price: 38,
  },
  {
    id: 9,
    title: 'Grilled Veal Filet Mignon',
    ingredients: 'Pumpkin, endives with hazelnuts',
    price: 42,
  },
  {
    id: 10,
    title: 'Grilled Black Angus Sirloin Steak',
    ingredients: 'Coin de rue’ potatoes, Béarnaise sauce',
    price: 32,
  },
];

///*** PRODUCTS PAGE DATA ***///

export const productsSortingOptions = [
  { id: 1, title: 'Sort by popularity', value: 'popular' },
  { id: 2, title: 'Sort by average rating', value: 'rating' },
  { id: 3, title: 'Sort by latest', value: 'latest' },
];

export const products = [
  {
    id: 1,
    title: 'Asian Spicy Chicken  Wings',
    img: productImg,
    price: 59.0,
    rating: 5,
  },
  {
    id: 2,
    title: 'Franch Cretam Pumpkin Soup',
    img: productImg,
    price: 30.0,
    discountPrice: 49.99,
    rating: 4.5,
    popular: true,
  },
  {
    id: 3,
    title: 'King Prawns with  Delicate Wine Sauce',
    img: productImg,
    price: 52.0,
    rating: 3.5,
  },
  {
    id: 4,
    title: 'Asian Spicy Chicken  Wings',
    img: productImg,
    price: 59.0,
    discountPrice: 79.99,
    rating: 5,
  },
  {
    id: 5,
    title: 'Franch Cretam Pumpkin Soup',
    img: productImg,
    price: 30.0,
    rating: 4.5,
  },
  {
    id: 6,
    title: 'King Prawns with  Delicate Wine Sauce',
    img: productImg,
    price: 52.0,
    rating: 3.5,
    popular: true,
  },
];

export const categoryLinks = [
  { id: 1, title: 'Deserts', href: '/categories?cat=deserts' },
  { id: 2, title: 'Healthy Food', href: '/categories?cat=deserts' },
  { id: 3, title: 'Main Dishes', href: '/categories?cat=main' },
  { id: 4, title: 'Snacks', href: '/categories?cat=snack' },
];

export const tags = [
  { id: 1, title: 'Cocktail' },
  { id: 2, title: 'Coffee' },
  { id: 3, title: 'Deserts' },
  { id: 4, title: 'Food' },
  { id: 5, title: 'Menu' },
  { id: 6, title: 'Recipes' },
  { id: 7, title: 'Restaurant' },
  { id: 8, title: 'Vegan menu' },
];
