import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const isHomePage = pathname === '/';
  const isErrorPage = pathname === '/error404';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {!isHomePage && !isErrorPage && <Banner />}
      <main className={`${!isHomePage && 'mt-14'} mb-32 flex-1 text-quaternary`}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
