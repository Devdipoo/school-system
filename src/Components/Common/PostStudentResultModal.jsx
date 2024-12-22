import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'  // Import PropTypes for prop validation

const PostStudentResultModal = ({ status, initialValue, onClose }) => {
  // Destructure name, className, and email from initialValue
  const { name, className, email } = initialValue

  // Modal open state
  const [open, setOpen] = React.useState(status)
  
  // Form state
  const [formData, setFormData] = React.useState({
    result: [
      {
        subjectName: '',
        subjectCode: '',
        internalMarks: '',
        externalMarks: '',
        totalInternalMarks: '',
        totalExternalMarks: '',
        attendance: '',
      },
    ],
  })

  // Handle form input change
  const handleResultChange = (index, e) => {
    const { name, value } = e.target
    const updatedResult = formData.result.map((subject, i) => {
      if (i === index) {
        return {
          ...subject,
          [name]: value,
        }
      }
      return subject
    })

    setFormData({
      ...formData,
      result: updatedResult,
    })
  }

  // Close modal
  const handleClose = () => {
    setOpen(false)
    onClose()
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('FormData:', formData)
    // For now, just log the data to the console
    console.log('Form submitted successfully with data: ', formData)
    handleClose()
  }

  // Add another subject to the result
  const addSubject = () => {
    setFormData({
      ...formData,
      result: [
        ...formData.result,
        {
          subjectName: '',
          subjectCode: '',
          internalMarks: '',
          externalMarks: '',
          totalInternalMarks: '',
          totalExternalMarks: '',
        },
      ],
    })
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-gray-300 shadow-md p-4 inline-block min-w-min max-w-full">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <div className="overflow-y-auto max-h-96">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3>Results:</h3>
              {formData.result.map((subject, index) => (
                <div key={index} className="space-y-2 flex flex-wrap">
                  <div className="flex items-center space-x-2">
                    <label htmlFor={subject.subjectName}>Subject Name:</label>
                    <input
                      type="text"
                      id={subject.subjectName}
                      name="subjectName"
                      placeholder="Subject Name"
                      value={subject.subjectName}
                      onChange={(e) => handleResultChange(index, e)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={subject.subjectCode}>Subject Code:</label>
                    <input
                      type="text"
                      id={subject.subjectCode}
                      name="subjectCode"
                      placeholder="Subject Code"
                      value={subject.subjectCode}
                      onChange={(e) => handleResultChange(index, e)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={subject.internalMarks}>
                      Internal Marks:
                    </label>
                    <input
                      type="number"
                      id={subject.internalMarks}
                      name="internalMarks"
                      placeholder="Internal Marks"
                      value={subject.internalMarks}
                      onChange={(e) => handleResultChange(index, e)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={subject.externalMarks}>
                      External Marks:
                    </label>
                    <input
                      type="number"
                      id={subject.externalMarks}
                      name="externalMarks"
                      placeholder="External Marks"
                      value={subject.externalMarks}
                      onChange={(e) => handleResultChange(index, e)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={subject.totalInternalMarks}>
                      Total Internal Marks:
                    </label>
                    <input
                      type="number"
                      id={subject.totalInternalMarks}
                      name="totalInternalMarks"
                      placeholder="Total Internal Marks"
                      value={subject.totalInternalMarks}
                      onChange={(e) => handleResultChange(index, e)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <label htmlFor={subject.totalExternalMarks}>
                      Total External Marks:
                    </label>
                    <input
                      type="number"
                      id={subject.totalExternalMarks}
                      name="totalExternalMarks"
                      placeholder="Total External Marks"
                      value={subject.totalExternalMarks}
                      onChange={(e) => handleResultChange(index, e)}
                      required
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addSubject}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Add Subject
              </button>
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>
          <Button onClick={handleClose} className="mt-4">
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  )
}

// Prop validation
PostStudentResultModal.propTypes = {
  status: PropTypes.bool.isRequired,
  initialValue: PropTypes.shape({
    name: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
}

export default PostStudentResultModal
