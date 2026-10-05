import { useNavigate } from "react-router-dom";

const SuppoprtDisplay = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-54 overflow-y-auto mt-6  rounded-xl
     border border-gray-200  space-y-10   bg-white p-5 shadow-sm"
    >
      <div className="flex justify-between">
        <h1>Support</h1>
        <p className="cursor-pointer" onClick={() => navigate("/support")}>
          view all
        </p>
      </div>
    </div>
  );
};

export default SuppoprtDisplay;
