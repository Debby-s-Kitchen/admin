
import { MdEdit } from "react-icons/md";
import Modal from "../../../Components/UI/Modal"
import { useState } from "react";
import { useAddFood } from "../../../Store/UseAddFood";

const statusStyles = {
  available: "bg-green-100 text-green-700",
  unavailable: "bg-red-100 text-red-700",
  "few-minutes": "bg-yellow-100 text-yellow-700",
};

const FoodTable = () => {
  // const [isOPen, setIsOpen] = useState(false);
  const [selectedId, setselectedId] = useState(null);
  const MenuData = useAddFood((state) => state.MenuData);
  const updateStatus = useAddFood((state) => state.updateStatus);

  const selectedItem = MenuData.find((item) => item.id === selectedId) ?? null;
  // const handleStatusChange = (newStatus) => {
  //   setFoods((currentFoods) =>
  //     currentFoods.map((item) =>
  //       item.id === selectedItem.id ? { ...item, status: newStatus } : item,
  //     ),
  //   );
  //   setIsOpen(false);
  //   setselectedItem(null);
  // };

  return (
    <div className="min-w-160 scroll-auto overflow-x-auto rounded-xl shadow">
      <table className="min-w-full border-collapse bg-white text-left">
        <thead>
          <tr className="bg-amber-700 text-white">
            <th className="p-3 text-sm font-semibold">Food</th>

            <th className="p-3 text-sm font-semibold">Categories</th>

            <th className="p-3 text-sm font-semibold">Status</th>

            <th className="p-3 text-sm font-semibold">Action</th>
          </tr>
        </thead>
        <tbody>
          {MenuData.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-100 hover:bg-amber-50"
            >
              <td className="p-3 flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded-md"
                />

                <span className="text-sm font-medium">{item.name}</span>
              </td>

              <td className="p-3 text-sm">{item.category}</td>

              <td className="p-3">
                <span
                  className={`text-xs font-semibold px-2 py-1 rounded-full ${
                    statusStyles[item.status] || "bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="p-3">
                <button
                  onClick={() => setselectedId(item.id)}
                  className="flex items-center gap-1 text-sm font-semibold text-amber-700 hover:text-amber-900 cursor-pointer"
                >
                  <MdEdit className="text-base" />
                  Edit
                </button>

                <Modal
                  isOpen={selectedItem !== null}
                 onClose={() => setselectedId(null)}
                >
                  {selectedItem && (
                    <div>
                      <div className="flex gap-2 items-center">
                        <img
                          src={selectedItem.image}
                          alt={selectedItem.name}
                          className="w-10 h-10 object-cover rounded-md"
                        />

                        <p className="font-semibold">{selectedItem.name}</p>
                      </div>

                      <div className="mt-5">
                        <label className="block text-sm font-medium mb-2">
                          Food Status
                        </label>

                       <select
                value={selectedItem.status}
                
                onChange={(e) => updateStatus(selectedItem.id, e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 w-full"
              >
                <option value="available">Available</option>
                <option value="few-minutes">Few Minutes</option>
                <option value="unavailable">Unavailable</option>
              </select>
                      </div>
                    </div>
                  )}
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FoodTable;
