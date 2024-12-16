import { Outlet } from "react-router-dom";
import Header from "./Header";
import Banner from "./Banner";

export default function Layout() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
