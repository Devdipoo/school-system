
import { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import { DataGrid } from '@mui/x-data-grid'
import viewIcon from '../../assets/viewIcon.png'
import editIcon from '../../assets/editIcon.png'
import deleteIcon from '../../assets/deleteIcon.png'
import ViewStudentResultModal from '../Common/ViewStudentResultModal'
import PostStudentResultModal from '../Common/PostStudentResultModal'

function StudentResultPost() {
  const [students, setStudents] = useState([])
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedStudent, setSelectedStudent] = useState(null)

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8]

  const studentClasses = classArray.map((studentClass) => (
    <option value={studentClass} key={studentClass}>
      {studentClass}
    </option>
  ))

  const handleClassSelect = async (e) => {
    const selectedClass = e.target.value
    setSelectedClass(selectedClass)
  }

  useEffect(() => {
    const fetchData = async () => {
      if (selectedClass) {
        try {
          const response = await handleGetClassData(selectedClass)
          const classData = response.map((student, index) => ({
            ...student,
            id: index + 1, // Add 1 to avoid zero-based indexing
          }))
          setStudents(classData)
        } catch (error) {
          console.error('Error fetching class data:', error)
        }
      }
    }
    fetchData()
  }, [selectedClass])

  const displayViewAttendance = (params) => {
    handleGetStudentResult(null, params.email)
      .then((studentResultData) => {
        const studentDetail = {
          name: params.firstName + ' ' + params.lastName,
          studentClass: 7,
          studentResultData: studentResultData,
        }
        setSelectedStudent(
          <ViewStudentResultModal
            status={true}
            initialValue={studentDetail}
            onClose={() => setSelectedStudent(null)}
          />
        )
      })
      .catch((error) => {
        console.log('Error fetching student result detail:', error)
      })
  }

  const editAttendance = (params) => {
    const studentDetail = {
      name: params.firstName + ' ' + params.lastName,
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

  const deleteStudentAttendance = (params) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
        handleResultDelete(params.email)
        .then(() => {
          const updatedStudents = students.filter((student) => student.id !== params.id)
          setStudents(updatedStudents)
        })
        .catch((error) => {
          console.error('Error deleting student:', error)
        })
    }
  }

  const columns = [
    { field: 'studentId', headerName: 'Student ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: false,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: false,
    },
    {
      field: 'rollNo',
      headerName: 'Roll No',
      width: 150,
      editable: false,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 250,
      editable: false,
    },
    {
      field: 'resultStatus',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <>
          <img
            src={viewIcon}
            onClick={() => displayViewAttendance(params.row)}
            alt="View Icon"
            style={{ width: 24, height: 24, cursor: 'pointer', marginRight: '5px' }}
          />
          <img
            src={editIcon}
            onClick={() => editAttendance(params.row)}
            alt="Edit Icon"
            style={{ width: 24, height: 24, cursor: 'pointer', marginRight: '5px' }}
          />
          <img
            src={deleteIcon}
            onClick={() => deleteStudentAttendance(params.row)}
            alt="Delete Icon"
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
