import Layout from './Components/shared/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Error404 from './pages/Error404/Error404';

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '*', element: <Error404 /> },
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
    ],
  },
];

export default routes;
