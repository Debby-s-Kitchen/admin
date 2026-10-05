// TopBar.jsx
import ReusableTopBar from "./Component/ReusableTopBar"

const TopBar = ({ title, setisOpen }) => {   
  return (
    
    <div className="fixed text-white top-0 left-0 right-0 md:left-70 z-40 bg-[radial-gradient(circle_at_top_right,#472322_0%,#29142E_45%,#1a0e20_100%)] py-7 px-6 shadow-sm">
      <ReusableTopBar 
        title={title}
        setisOpen={setisOpen}   
      />
    </div>
  )
}

export default TopBar