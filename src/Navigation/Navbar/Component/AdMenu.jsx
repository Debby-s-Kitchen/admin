import { NavLink } from "react-router-dom";
import { sidebarItems } from "./Component/SideBarData"; 

const AdMenu = () => {
  const linkClass = ({ isActive }) =>
    `flex gap-1 align-middle items-center w-50 rounded-xl ps-5 h-13 ${
      isActive ? "bg-white text-black"  : "hover:bg-white/25 "
      
    }`;

  return (
    <div>
      <ul className="flex-col  mt-20 text-xl space-y-3">
        {sidebarItems.map((item) => (
          <li key={item.id}>   
            <NavLink to={item.path} className={linkClass}>
              <span className="text-sm">{item.icon}</span>  
              <p className="text-sm font-bold">{item.title}</p>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdMenu;