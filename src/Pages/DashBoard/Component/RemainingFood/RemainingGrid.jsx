import { useAddFood } from "../../../../Store/UseAddFood";
import RemainingCard from "./RemainingCard";
const RemainingGrid = () => {


const MenuData = useAddFood((state) => state.MenuData);
const unavailableItems = MenuData.filter ((item) =>
   item.status === "unavailable"

);


  return (
    <div className="mt-4 w-full max-w-full rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <h2 className="mb-3 text-lg font-semibold text-gray-800">
        Remaining Items
      </h2>
      <ul className="max-h-50 overflow-y-auto pr-2">
        {unavailableItems.map((remain) => (
          <RemainingCard
            key={remain.title}
            image={remain.image}
            food={remain.name}
            status={remain.status}
          />
        ))}
      </ul>
    </div>
  );
};
export default RemainingGrid;
