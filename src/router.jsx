import Layout from './Components/shared/Layout';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'categories', element: <Categories /> },
      { path: 'products', element: <Products /> },
    ],
  },
];

export default routes;
