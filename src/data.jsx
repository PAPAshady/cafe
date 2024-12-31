import { FaHeadphones } from 'react-icons/fa6';
import { FiShoppingCart } from 'react-icons/fi';
import { LuPhone, LuAtSign } from 'react-icons/lu';
import servicesImg1 from './assets/images/home-page/servicesImg1.png';
import servicesImg2 from './assets/images/home-page/servicesImg2.png';
import servicesImg3 from './assets/images/home-page/servicesImg3.png';
import servicesImg4 from './assets/images/home-page/servicesImg4.png';
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
import productImg01 from './assets/images/Products/productImg01.png'
import productImg02 from './assets/images/Products/productImg02.png'
import productImg03 from './assets/images/Products/productImg03.png'

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

export const categories = [
  { id: 1, title: 'Vegan', icon: <IoFastFoodOutline />, isActive: false },
  { id: 2, title: 'Salad', icon: <IoFastFoodOutline />, isActive: true },
  { id: 3, title: 'Drinks', icon: <IoFastFoodOutline />, isActive: false },
  { id: 4, title: 'Main dishes', icon: <IoFastFoodOutline />, isActive: false },
  { id: 5, title: 'Deserts', icon: <IoFastFoodOutline />, isActive: false },
];

export const products = [
  {id: 1, title: 'Greek Salad', img: productImg01,  rate: 4.5, price: 50, category: 'salad' },
  {id: 2, title: 'Buffalo Burger', img:productImg02,  rate: 4, price: 80, category: 'burger' },
  {id: 3, title: 'Latte', img: productImg03,  rate: 3, price: 30, category: 'drink' },
  {id: 4, title: 'Pizza Rossini', img: productImg01,  rate: 5, price: 90, category: 'pizza' },
  {id: 5, title: 'Cheesecake', img: productImg02,  rate: 3.5, price: 20, category: 'cake' },
  {id: 6, title: 'Bacon Burger', img: productImg03,  rate: 4, price: 35, category: 'burger' },
  {id: 7, title: 'Chicken Salad', img: productImg01,  rate: 4.5, price: 18, category: 'salad' },
  {id: 8, title: 'Coffee cake', img: productImg02,  rate: 4.7, price: 24, category: 'cake' },
  {id: 9, title: 'Cheese Burger', img: productImg03,  rate: 3.7, price: 29, category: 'burger' },
  {id: 10, title: 'Espresso', img: productImg01,  rate: 3.9, price: 36, category: 'drink' },
  {id: 11, title: 'Carrot cake', img: productImg02,  rate: 4.3, price: 45, category: 'cake' },
  {id: 12, title: 'Cappuccino', img: productImg03,  rate: 5, price: 9, category: 'drink' },
  {id: 13, title: 'Pizza Margherita', img: productImg01,  rate: 4.6, price: 79, category: 'pizza' },
  {id: 14, title: 'Greek Burger', img: productImg02,  rate: 4.9, price: 38, category: 'burger' },
  {id: 15, title: 'Americano', img: productImg03,  rate: 3.3, price: 19, category: 'drink' },
  {id: 16, title: 'Pizza Bianca', img: productImg01,  rate: 4.4, price: 99, category: 'pizza' },
  {id: 17, title: 'Chef Salad', img: productImg02,  rate: 5, price: 10, category: 'salad' },
  {id: 18, title: 'Caesar Salad', img: productImg03,  rate: 3, price: 87, category: 'salad' },
  {id: 19, title: 'Red velvet cake', img: productImg01,  rate: 2.5, price: 65, category: 'cake' },
  {id: 20, title: 'Chili Burger', img: productImg02,  rate: 4, price: 44, category: 'burger' },
]