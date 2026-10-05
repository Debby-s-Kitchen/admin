import SideBar from "../Navigation/Navbar/SideBar"
import { Outlet, useLocation } from "react-router-dom"
import { useState } from "react";
import TopBar from "../Navigation/TopBar/TopBar";
import { sidebarItems } from "../Navigation/Navbar/Component/Component/SideBarData"; 

const Layout = () => {
  const [isOPen, setisOpen] = useState(false);
  const location = useLocation(); 

  const currentItem = sidebarItems.find((item) => item.path === location.pathname);

  return (
    <div className="min-w-0">
      <SideBar 
        isOPen={isOPen}
        setisOpen={setisOpen}
      />

      <div className="min-w-0 md:ml-70">
        <TopBar 
          title={currentItem ? currentItem.title : "Dashboard"} 
          setisOpen={setisOpen}
        />

      
        <main className="px-5 pt-28">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout