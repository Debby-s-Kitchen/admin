function StatCard({ title, amount }) {
  return (
    
    <div className="rounded-xl border border-gray-200 space-y-10 w-full  h-40 bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="mt-1 text-2xl font-semibold text-gray-900">{amount}</p>
    </div>
  );
}

export default StatCard;