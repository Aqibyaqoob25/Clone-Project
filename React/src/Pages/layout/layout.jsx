import Home from "./home";
import Navbar from "./nav-bar";
import Sidebar from "./side-bar";

function Layout() {
  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default Layout;
