import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "./pages/Home";

import NavbarMenu1Page from "./pages/NavbarMenu1Page";
import NavbarMenu2Page from "./pages/NavbarMenu2Page";
import NavbarMenu3Page from "./pages/NavbarMenu3Page";

import BottomNavbar1Page from "./pages/BottomNavbar1Page";
import BottomNavbar2Page from "./pages/BottomNavbar2Page";
import BottomNavbar3Page from "./pages/BottomNavbar3Page";

import SidebarMenu1Page from "./pages/SidebarMenu1Page";
import SidebarMenu2Page from "./pages/SidebarMenu2Page";
import SidebarMenu3Page from "./pages/SidebarMenu3Page";

// import BottomNavbar1 from "./components/bottom-navbar-1/BottomNavbar1.jsx";
// import BottomNavbar2 from "./components/bottom-navbar-2/BottomNavbar2.jsx";
// import BottomNavbar3 from "./components/bottom-navbar-3/BottomNavbar3.jsx";

// import NavbarMenu1 from "./components/navbar-menu-1/NavbarMenu1.jsx";
// import NavbarMenu2 from "./components/navbar-menu-2/NavbarMenu2.jsx";
// import AppNavbarMenu3 from "./components/navbar-menu-3/AppNavbarMenu3.jsx";

// import SidebarMenu1 from "./components/sidebar-menu-1/SidebarMenu1.jsx";
// import SidebarMenu2 from "./components/sidebar-menu-2/SidebarMenu2.jsx";
// import SidebarMenu3 from "./components/sidebar-menu-3/SidebarMenu3.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/bottom-navbar-1" element={<BottomNavbar1Page />} />
        <Route path="/bottom-navbar-2" element={<BottomNavbar2Page />} />
        <Route path="/bottom-navbar-3" element={<BottomNavbar3Page />} />

        <Route path="/navbar-menu-1" element={<NavbarMenu1Page />} />
        <Route path="/navbar-menu-2" element={<NavbarMenu2Page />} />
        <Route path="/navbar-menu-3" element={<NavbarMenu3Page />} />

        <Route path="/sidebar-menu-1" element={<SidebarMenu1Page />} />
        <Route path="/sidebar-menu-2" element={<SidebarMenu2Page />} />
        <Route path="/sidebar-menu-3" element={<SidebarMenu3Page />} />
      </Routes>
    </Router>

    // <Home />

    // <BottomNavbar1 />
    // <BottomNavbar2 />
    // <BottomNavbar3 />

    // <NavbarMenu1 />
    // <NavbarMenu2 />
    // <AppNavbarMenu3 />

    // <SidebarMenu1 />
    // <SidebarMenu2 />
    // <SidebarMenu3 />
  );
}

export default App;
