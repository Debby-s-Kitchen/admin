const RemainingCard = ({ image, food, status }) => {
  return (
    <li className="flex items-center justify-between gap-3 border-b border-gray-100 py-3 last:border-b-0">
     
      
      <div className="flex min-w-0 items-center gap-2">
        <img
          src={image}
          alt={food}
          className="h-8 w-8 rounded-full object-cover"
        />
        <p className="truncate text-sm font-medium text-gray-800">
          {food}
        </p>
      </div>
      <p className="shrink-0 text-xs text-gray-500"> {status} </p>{" "}
    </li>
  );
};
export default RemainingCard;
