import StatCard from "./StatCard";
import { StatData } from "./StatData";

function StatGrid() {
  return (
    
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {StatData.map((stat) => (
        <StatCard key={stat.title} title={stat.title} amount={stat.amount} />
      ))}
    </div>
  );
}

export default StatGrid;