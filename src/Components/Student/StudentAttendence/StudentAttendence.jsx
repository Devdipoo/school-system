import { useState } from 'react';

function StudentAttendance() {
  const [selectedSession, setSelectedSession] = useState(null);

  // Hardcoded attendance data
  const attendance = {
    1: [true, true, false, true, true, true, false, true, true, false, true, false, true, false, true, false, true, true, true, true, true, false, true, true, false, true, true, false, true, false, true],
    2: [true, true, true, false, true, true, true, true, false, true, true, false, true, true, true, true, true, true, false, true, false, true, false, true, true, true, false, true, false, true, false],
    3: [true, false, true, true, false, true, true, true, true, true, false, true, false, true, true, false, true, true, true, false, false, true, true, true, false, true, true, true, false, true, false],
    4: [false, true, true, true, true, false, true, true, true, true, true, true, false, true, true, true, true, false, true, false, true, true, true, true, true, true, true, true, false, true, true],
  };

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];

  const sessionArray = [2000, 2001, 2002, 2024];

  const sessions = sessionArray.map((session) => (
    <option value={session} key={session}>
      {session}
    </option>
  ));

  const handleSessionSelect = (e) => {
    setSelectedSession(e.target.value);
  };

  const date = Array.from({ length: 31 }, (_, index) => (
    <th key={index + 1}>{index + 1}</th>
  ));

  const monthAttendance = selectedSession && attendance[selectedSession]
    ? Object.entries({ 1: attendance[1], 2: attendance[2], 3: attendance[3], 4: attendance[4] }).map(
        ([month, monthAttendance]) => {
          let presentCount = 0;
          let absentCount = 0;

          const days = monthAttendance.map((day, index) => {
            if (day === true) {
              presentCount++;
              return <td key={index}>P</td>;
            } else if (day === false) {
              absentCount++;
              return <td key={index}>A</td>;
            } else {
              return <td key={index}>-</td>;
            }
          });

          return (
            <tr key={month}>
              <td>{months[month - 1]}</td>
              {days}
              <td>{presentCount}</td>
              <td>{absentCount}</td>
            </tr>
          );
        }
      )
    : null;

  return (
    <div>
      <div className="m-10 bg-gray-400 rounded-md">
        <h1 className="p-5 text-3xl">Student Attendance</h1>
        <div className="p-4">
          <label className="p-4 text-lg" htmlFor="Session">
            Select Session
          </label>
          <select
            onChange={handleSessionSelect}
            className="p-2 w-60 rounded-sm outline-none"
          >
            <option value="Select Session">Select Session</option>
            {sessions}
          </select>
        </div>
      </div>
      <table className="attendance-table m-10">
        <thead>
          <tr>
            <th>Month</th>
            {date}
            <th>Total Present</th>
            <th>Total Absent</th>
          </tr>
        </thead>
        <tbody>{monthAttendance}</tbody>
      </table>
    </div>
  );
}

export default StudentAttendance;
