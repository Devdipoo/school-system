
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import viewIcon from "../../assets/viewIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";

const AssignmentPost = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentAssignment, setCurrentAssignment] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    subject: "",
    className: "",
    assignmentCode: "",
  });
  const [assignments, setAssignments] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Update assignments list with new assignment data locally
    setAssignments([
      ...assignments,
      {
        ...formData,
        id: assignments.length + 1, // Add a new id based on the length
      },
    ]);

    alert("Assignment assigned successfully");

    // Clear the form after submission
    setFormData({
      title: "",
      description: "",
      deadline: "",
      subject: "",
      className: "",
      assignmentCode: "",
    });
  };

  const generateAssignmentCode = () => {
    const { subject, className } = formData;
    const currentDate = new Date().toISOString().slice(0, 10); // Get current date
    const assignmentCode = `${subject.toUpperCase().substring(0, 3)}-${className
      .toUpperCase()
      .substring(0, 3)}-${currentDate}`;
    setFormData({
      ...formData,
      assignmentCode: assignmentCode,
    });
  };

  const handleDeleteAssignment = (assignmentId) => {
    // Filter out the deleted assignment
    setAssignments((prevAssignments) =>
      prevAssignments.filter((assignment) => assignment.id !== assignmentId)
    );
    alert("Assignment deleted successfully!");
  };

  const displayViewAssignment = (assignment) => {
    setCurrentAssignment(assignment);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const columns = [
    { field: "className", headerName: "Class", width: 90 },
    { field: "subject", headerName: "Subject", width: 150, editable: false },
    { field: "title", headerName: "Title", width: 150, editable: false },
    { field: "assignmentCode", headerName: "Assignment-Code", width: 150, editable: false },
    { field: "deadline", headerName: "Deadline", width: 250, editable: false },
    {
      field: "view Assignment",
      headerName: "View Assignment",
      width: 150,
      renderCell: (params) => (
        <img
          src={viewIcon}
          onClick={() => displayViewAssignment(params.row)}
          alt="View Icon"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
      ),
    },
    {
      field: "Delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <img
          src={deleteIcon}
          onClick={() => handleDeleteAssignment(params.row.id)}
          alt="Delete Icon"
          style={{ width: 24, height: 24, cursor: "pointer" }}
        />
      ),
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-4">
          {" "}
          {/* Assigning 4 parts to the form */}
          <div className="max-w-md mx-auto mt-6 ml-8">
            <h2 className="text-lg font-semibold mb-4">Assign an Assignment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="title" className="block">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full h-32"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block">
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="className" className="block">
                  Class Name:
                </label>
                <input
                  type="text"
                  id="className"
                  name="className"
                  value={formData.className}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="deadline" className="block">
                  Deadline:
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleChange}
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="assignmentCode" className="block">
                  Assignment Code:
                </label>
                <div className="flex">
                  <input
                    type="text"
                    id="assignmentCode"
                    name="assignmentCode"
                    value={formData.assignmentCode}
                    readOnly // Making input box read-only
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  />
                  <button
                    type="button"
                    onClick={generateAssignmentCode}
                    className="ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                  >
                    Generate
                  </button>
                </div>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Assign Assignment
              </button>
            </form>
          </div>
        </div>
        <div className="col-span-8">
          <div className="m-10 bg-gray-400 rounded-md">
            <h1 className="p-5 text-3xl">Assignments</h1>
          </div>
          <Box className="m-10 rounded-md" sx={{ height: 400 }}>
            <DataGrid
              rows={assignments}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
            />
          </Box>
        </div>
      </div>
      {openModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg space-y-4 max-w-md">
            <h2 className="text-lg font-bold">{currentAssignment.title}</h2>
            <p>{currentAssignment.description}</p>
            <p>Subject: {currentAssignment.subject}</p>
            <p>Class: {currentAssignment.className}</p>
            <p>Deadline: {currentAssignment.deadline}</p>
            <div className="mt-4 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssignmentPost;
