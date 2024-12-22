import { useState } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import viewIcon from '../../assets/viewIcon.png';
import editIcon from '../../assets/editIcon.png';
import ViewStudentAttendanceModal from '../Common/ViewStudentAttendanceModal';
import PostStudentAttendanceModal from '../Common/PostStudentAttendanceModal';

function StudentAttendancePost() {
  // Static array of students
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      studentId: 1,
      firstName: 'John',
      lastName: 'Doe',
      rollNo: '123',
      email: 'john.doe@example.com',
      studentClass: 7,
      attendanceStatus: 'Present',
    },
    {
      studentId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      rollNo: '124',
      email: 'jane.smith@example.com',
      studentClass: 7,
      attendanceStatus: 'Absent',
    },
    // Add more student records as needed
  ];

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const studentClasses = classArray.map((studentClass) => (
    <option value={studentClass} key={studentClass}>
      {studentClass}
    </option>
  ));

  const handleClassSelect = (e) => {
    const selectedClass = e.target.value;
    setSelectedClass(selectedClass);
  };

  const displayViewAttendance = (params) => {
    const studentDetail = {
      name: params.firstName + ' ' + params.lastName,
      studentClass: params.studentClass,
      studentAttendance: {
        status: params.attendanceStatus,
        // Example attendance data
        details: 'Attendance details here.',
      },
    };

    setSelectedStudent(
      <ViewStudentAttendanceModal
        status={true}
        initialValue={studentDetail}
        onClose={() => setSelectedStudent(null)}
      />
    );
  };

  const editAttendance = (params) => {
    const studentDetail = {
      name: params.firstName + ' ' + params.lastName,
      className: params.studentClass,
      email: params.email,
      year: new Date().getFullYear(),
    };

    setSelectedStudent(
      <PostStudentAttendanceModal
        status={true}
        initialValue={studentDetail}
        onClose={() => setSelectedStudent(null)}
      />
    );
  };

  const columns = [
    { field: 'studentId', headerName: 'Student ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: false },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: false },
    { field: 'rollNo', headerName: 'Roll No', width: 150, editable: false },
    { field: 'email', headerName: 'Email', width: 250, editable: false },
    {
      field: 'attendanceStatus',
      headerName: 'Attendance Status',
      width: 150,
      renderCell: (params) => (
        <>
          <img
            src={viewIcon}
            onClick={() => displayViewAttendance(params.row)}
            alt="view Icon"
            style={{ width: 24, height: 24, cursor: 'pointer' }}
          />
          <img
            src={editIcon}
            onClick={() => editAttendance(params.row)}
            alt="Edit Icon"
            style={{ width: 24, height: 24, cursor: 'pointer' }}
          />
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Attendance</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Class
          </label>
          <select
            className="p-2 w-60 rounded-sm outline-none"
            onChange={handleClassSelect}
          >
            <option value="">Select Class</option>
            {studentClasses}
          </select>
        </div>
      </div>

      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={students.filter(student => student.studentClass === Number(selectedClass) || !selectedClass)}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      {selectedStudent}
    </div>
  );
}

export default StudentAttendancePost;
