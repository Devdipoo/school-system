import { useState } from "react";

function StudentAssignment() {
  const [selectedSession, setSelectedSession] = useState("");
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const assignments = [
    {
      _id: "1",
      title: "Math Assignment 1",
      subject: "Mathematics",
      description: "Solve the algebraic equations.",
      deadline: "2024-12-31",
    },
    {
      _id: "2",
      title: "Physics Assignment 2",
      subject: "Physics",
      description: "Read chapters 4 and 5, and answer the questions.",
      deadline: "2025-01-15",
    },
    {
      _id: "3",
      title: "Chemistry Lab Report",
      subject: "Chemistry",
      description: "Submit the lab report for the last experiment.",
      deadline: "2024-12-25",
    },
  ];

  const handleSessionChange = (e) => {
    setSelectedSession(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Assignments for Session {selectedSession}
      </h1>
      <select
        value={selectedSession}
        onChange={handleSessionChange}
        className="block w-full p-3 border border-gray-300 rounded-md mb-8 shadow-md focus:outline-none focus:border-blue-500"
      >
        <option value="">Select Session</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {assignments.map((assignment) => (
          <div
            key={assignment._id}
            className="border rounded-md p-6 bg-white shadow-md hover:shadow-lg transition duration-300 ease-in-out"
          >
            <h2 className="text-xl font-semibold mb-4">{assignment.title}</h2>
            <p>Subject: {assignment.subject}</p>
            <p>Description: {assignment.description}</p>
            <p>Deadline: {assignment.deadline}</p>
            <button
              onClick={() => setSelectedAssignment(assignment)}
              className="mt-4 bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 transition duration-300"
            >
              View Assignment
            </button>
          </div>
        ))}
      </div>
      {selectedAssignment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-xl font-semibold">
                  Assignment Details - {selectedAssignment.title}
                </h3>
                <button
                  onClick={() => setSelectedAssignment(null)}
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                >
                  <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="p-6 flex flex-col">
                <p><strong>Title:</strong> {selectedAssignment.title}</p>
                <p><strong>Subject:</strong> {selectedAssignment.subject}</p>
                <p><strong>Description:</strong> {selectedAssignment.description}</p>
                <p><strong>Deadline:</strong> {new Date(selectedAssignment.deadline).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  onClick={() => setSelectedAssignment(null)}
                  className="bg-gray-500 text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1"
                  type="button"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentAssignment;
