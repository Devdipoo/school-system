import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const PostStudentAttendanceModal = ({ status, initialValue, onClose }) => {
  const [open, setOpen] = useState(status);
  const [attendanceData, setAttendanceData] = useState({});
  const [presentCount, setPresentCount] = useState({});
  const [absentCount, setAbsentCount] = useState({});

  const { name, email, className } = initialValue;

  const monthsWithDays = {
    Jan: 31,
    Feb: 28, // 29 in a leap year
    Mar: 31,
    Apr: 30,
    May: 31,
    Jun: 30,
    Jul: 31,
    Aug: 31,
    Sep: 30,
    Oct: 31,
    Nov: 30,
    Dec: 31,
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  const handleCheckboxChange = (month, day) => {
    const newAttendanceData = { ...attendanceData };
    if (!newAttendanceData[month]) {
      newAttendanceData[month] = {};
    }
    newAttendanceData[month][day] = !newAttendanceData[month][day];
    setAttendanceData(newAttendanceData);

    // Update present and absent counts
    const present = Object.values(newAttendanceData[month]).filter(
      (day) => day
    ).length;
    const absent = Object.values(newAttendanceData[month]).filter(
      (day) => !day
    ).length;
    setPresentCount((prevCount) => ({ ...prevCount, [month]: present }));
    setAbsentCount((prevCount) => ({ ...prevCount, [month]: absent }));
  };

  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ));

  const renderAttendanceTable = () => {
    return Object.entries(monthsWithDays).map(([month, days]) => {
      const present = presentCount[month] || 0;
      const absent = days - present;
      return (
        <tr key={month}>
          <td>{month}</td>
          {Array.from({ length: days }, (_, index) => (
            <td key={index + 1}>
              <input
                type="checkbox"
                checked={attendanceData[month] && attendanceData[month][index + 1]}
                onChange={() => handleCheckboxChange(month, index + 1)}
              />
            </td>
          ))}
          {Array.from({ length: 31 - days }, (_, index) => (
            <td key={index + 1}>-</td>
          ))}
          <td>{present}</td>
          <td>{absent}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border-2 border-black shadow-md p-4 inline-block min-w-min max-w-full">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>
          <form className="flex flex-wrap">
            <table className="attendance-table m-10">
              <thead>
                <tr>
                  <th>Month</th>
                  {date}
                  <th>Total Present</th>
                  <th>Total Absent</th>
                </tr>
              </thead>
              <tbody>{renderAttendanceTable()}</tbody>
            </table>
            <Button
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </form>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PostStudentAttendanceModal;
