import Layout from './Components/shared/Layout';
import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Error404 from './pages/Error404/Error404';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'categories', element: <Categories /> },
      { path: 'products', element: <Products /> },
      { path: 'error404', element: <Error404 /> },
    ],
  },
];

export default routes;
