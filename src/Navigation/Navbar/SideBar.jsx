import AdMenu from "./Component/AdMenu";

const SideBar = ({ isOPen, setisOpen }) => {
  return (
    <>
      <div className="bg-black text-gray-300 w-69 h-screen overflow-y-auto z-50 p-5 hidden fixed md:block">
        <h1 className="text-2xl font-serif">Food Admin Management</h1>
        <AdMenu />
      </div>

      
      {isOPen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 md:hidden"
          onClick={() => setisOpen(false)}   
        >
          <div
            className="bg-black w-79 h-screen text-gray-200 overflow-y-auto p-5"
            onClick={() => setisOpen(false)}  
          >
            <div className="flex  justify-between">
              <h1 className="text-2xl font-serif">Food Admin Management</h1>
              <p onClick={() => setisOpen(false)}>X</p>
            </div>
            <AdMenu />
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;