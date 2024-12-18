import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";

export default function Layout() {
  return (
    <div>
      <Header />
      <Banner />
      <main className="mt-16 mb-20">
        <Outlet />
      </main>
    </div>
  );
}
