import { useState } from 'react';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function TimeTableStudent() {
  const [schedule, setSchedule] = useState({
    Monday: new Array(8).fill(''),
    Tuesday: new Array(8).fill(''),
    Wednesday: new Array(8).fill(''),
    Thursday: new Array(8).fill(''),
    Friday: new Array(8).fill('')
  });

  // Simulated timetable data (for UI purposes)
  const simulatedTimetableData = {
    Monday: ['Math', 'English', 'Science', 'History', 'Lunch Break', 'Art', 'Physical Education', 'Music'],
    Tuesday: ['Physics', 'Math', 'Chemistry', 'Biology', 'Lunch Break', 'History', 'Art', 'Computer Science'],
    Wednesday: ['Geography', 'Math', 'History', 'English', 'Lunch Break', 'Science', 'Physical Education', 'Music'],
    Thursday: ['Chemistry', 'Biology', 'Math', 'Physics', 'Lunch Break', 'Art', 'History', 'Physical Education'],
    Friday: ['Computer Science', 'Math', 'English', 'Geography', 'Lunch Break', 'History', 'Science', 'Physical Education'],
  };

  // Set the simulated timetable data to the schedule state
  const setSimulatedTimetable = () => {
    setSchedule(simulatedTimetableData);
  };

  // Call to set simulated timetable data when component mounts
  useState(() => {
    setSimulatedTimetable();
  }, []);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="bg-white p-8 rounded-lg mt-10">
        <h2 className="text-lg font-bold mb-4 text-center">Timetable</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-500 table-fixed">
            <thead>
              <tr>
                <th className="border border-gray-500"></th>
                {daysOfWeek.map((day, index) => (
                  <th key={index} className="border border-gray-500 text-lg">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, index) => (
                <tr key={index}>
                  <td className="border border-gray-500 text-lg">Period {index + 1}</td>
                  {daysOfWeek.map((day, dayIndex) => (
                    <td key={dayIndex} className="border border-gray-500 text-lg">
                      {schedule[day][index] || (index === 4 ? 'Lunch Break' : '')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TimeTableStudent;
