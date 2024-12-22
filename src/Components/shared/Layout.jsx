import { Outlet, useLocation } from 'react-router-dom';
import routes from '../../router';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isValidRoute = routes[0].children.some(
    (route) => route.path === pathname
  );

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {!isHomePage && isValidRoute && <Banner />}
      <main
        className={`${!isHomePage && 'mt-14'} mb-32 flex-1 text-quaternary`}
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
