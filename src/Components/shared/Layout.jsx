import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';

  return (
    <div>
      <Header />
      {!isHomePage && <Banner />}
      <main className={`${!isHomePage && 'mt-14'} mb-32 text-quaternary`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
