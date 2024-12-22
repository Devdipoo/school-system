import { useState } from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import viewIcon from '../../assets/viewIcon.png'
import editIcon from '../../assets/editIcon.png'
import ViewStudentResultModal from '../Common/ViewStudentResultModal'
import PostStudentResultModal from '../Common/PostStudentResultModal'

function StudentResultPost() {
  const [students, setStudents] = useState([])
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)

  // Mock data to simulate student data for each class
  const mockClassData = {
    1: [
      { studentId: 1, firstName: 'John', lastName: 'Doe', rollNo: '123', email: 'john.doe@example.com', studentClass: 1, resultStatus: 'Passed' },
      { studentId: 2, firstName: 'Jane', lastName: 'Smith', rollNo: '124', email: 'jane.smith@example.com', studentClass: 1, resultStatus: 'Failed' },
    ],
    2: [
      { studentId: 3, firstName: 'Alex', lastName: 'Johnson', rollNo: '125', email: 'alex.johnson@example.com', studentClass: 2, resultStatus: 'Passed' },
      { studentId: 4, firstName: 'Sara', lastName: 'Lee', rollNo: '126', email: 'sara.lee@example.com', studentClass: 2, resultStatus: 'Failed' },
    ],
    // Add more class data as needed
  }

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8]
  const studentClasses = classArray.map((studentClass) => (
    <option value={studentClass} key={studentClass}>
      {studentClass}
    </option>
  ))

  const handleClassSelect = (e) => {
    const selectedClass = e.target.value
    setSelectedClass(selectedClass)

    // Fetch and set students based on selected class
    if (selectedClass) {
      setStudents(mockClassData[selectedClass] || [])
    }
  }

  const displayViewAttendance = (params) => {
    const studentDetail = {
      name: `${params.firstName} ${params.lastName}`,
      studentClass: params.studentClass,
      studentResultData: { result: 'Passed', details: 'Sample result data here' },
    }
    setSelectedStudent(
      <ViewStudentResultModal
        status={true}
        initialValue={studentDetail}
        onClose={() => setSelectedStudent(null)}
      />
    )
  }

  const editAttendance = (params) => {
    const studentDetail = {
      name: `${params.firstName} ${params.lastName}`,
      className: params.studentClass,
      email: params.email,
      year: new Date().getFullYear(),
    }
    setSelectedStudent(
      <PostStudentResultModal
        status={true}
        initialValue={studentDetail}
        onClose={() => setSelectedStudent(null)}
      />
    )
  }

  const columns = [
    { field: 'studentId', headerName: 'Student ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: false },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: false },
    { field: 'rollNo', headerName: 'Roll No', width: 150, editable: false },
    { field: 'email', headerName: 'Email', width: 250, editable: false },
    {
      field: 'resultStatus',
      headerName: 'Result Status',
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
  ]

  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Result</h1>
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

      <Box className="p-10" sx={{ height: 400 }}>
        <DataGrid
          rows={students}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      {selectedStudent}
    </div>
  )
}

export default StudentResultPost
