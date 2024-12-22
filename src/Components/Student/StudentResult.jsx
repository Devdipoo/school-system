

function StudentResult() {
  // Hardcoding some example data for the results
  const results = [
    {
      subjectCode: 'CS101',
      subjectName: 'Computer Science',
      internalMarks: 35,
      totalInternalMarks: 50,
      externalMarks: 70,
      totalExternalMarks: 100,
    },
    {
      subjectCode: 'MA102',
      subjectName: 'Mathematics',
      internalMarks: 40,
      totalInternalMarks: 50,
      externalMarks: 80,
      totalExternalMarks: 100,
    },
    // Add more data if needed
  ];

  // Calculate total marks
  let totalInternalMarks = 0;
  let totalExternalMarks = 0;
  let totalPossibleInternalMarks = 0;
  let totalPossibleExternalMarks = 0;
  
  results.forEach((result) => {
    totalInternalMarks += result.internalMarks;
    totalExternalMarks += result.externalMarks;
    totalPossibleInternalMarks += result.totalInternalMarks;
    totalPossibleExternalMarks += result.totalExternalMarks;
  });

  return (
    <div className="p-4">
      <h1 className="text-4xl font-normal">Student Results</h1>
      <table className="w-full p-2 divide-y mt-7 divide-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              S.N
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subject Code
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Subject
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Mid Terms (Marks/Total)
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Final Term (Marks/Total)
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {results.map((result, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {result.subjectCode}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {result.subjectName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {result.internalMarks}/{result.totalInternalMarks}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {result.externalMarks}/{result.totalExternalMarks}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-50">
            <td
              colSpan={3}
              className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
            >
              Total
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {totalInternalMarks}/{totalPossibleInternalMarks}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              {totalExternalMarks}/{totalPossibleExternalMarks}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}  

export default StudentResult;
