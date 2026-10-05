const Table = ({ headers, rows, renderRow }) => {
  return (
    <div className="w-full overflow-x-auto ">
      <table className="w-full min-w-full">
        <thead>
          <tr>
            {headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-3 text-left"
              >
                {header.heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id} className="border-b hover:bg-gray-400 cursor-pointer transition-colors">
              {renderRow(row)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;