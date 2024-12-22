import { useState, useEffect } from 'react';
import axios from 'axios';

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function TimeTableStudentByTeacher() {
  const [className, setClassName] = useState('');
  const [schedule, setSchedule] = useState({
    Monday: new Array(8).fill(''),
    Tuesday: new Array(8).fill(''),
    Wednesday: new Array(8).fill(''),
    Thursday: new Array(8).fill(''),
    Friday: new Array(8).fill('')
  });
  const [openModal, setOpenModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [timetableData, setTimetableData] = useState(null);

  const classArray = [1, 2, 3, 4, 5, 6, 7, 8,9,10];

  useEffect(() => {
    if (selectedClass) {
      axios.get(`http://localhost:8000/time-table?class=${selectedClass}`)
        .then(response => {
          console.log(response.data);
          setTimetableData(response.data.schedule);
          console.log("here is the data of timetable",response.data.schedule)
          // Set the fetched timetable data to the schedule state
          setSchedule(response.data.schedule);
        })
        .catch(error => {
          console.error('Error fetching timetable:', error);
        });
    }
  }, [selectedClass]);

  const studentClasses = classArray.map((studentClass) => (
    <option value={studentClass} key={studentClass}>
      {studentClass}
    </option>
  ));

  const handleClassSelect = (event) => {
    const selectedClass = event.target.value;
    setSelectedClass(selectedClass);
    setSchedule({
      Monday: new Array(8).fill(''),
      Tuesday: new Array(8).fill(''),
      Wednesday: new Array(8).fill(''),
      Thursday: new Array(8).fill(''),
      Friday: new Array(8).fill('')
    });
  };

  const handleClassNameChange = (event) => {
    setClassName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!className || className === "select the class") {
      alert('Please select a class before submitting.');
      return;
    }
  
    // Check if any input is empty
    const isEmpty = Object.values(schedule).some(daySchedule =>
      Array.isArray(daySchedule) && daySchedule.slice(0, 4).some(period => !period.trim())
    );
  
    if (isEmpty) {
      alert('Please fill in all schedule fields before submitting.');
      return;
    }
  
    // Prepare data to send
    const dataToSend = {
      className: className,
      schedule: schedule
    };
  
    console.log("data to send", dataToSend);
  
    try {
      const response = await axios.post('http://localhost:8000/time-table', dataToSend);
      console.log('Server Response:', response.data);
      console.log('Server Response:', response.status);
  
      if (response.status === 200) {
        alert('Schedule updated successfully!');
        // Show updated data
        setTimetableData(response.data.data.schedule);
      } else if (response.status === 201) {
        alert('Schedule submitted successfully!');
        // Show newly created data
        setTimetableData(response.data.data.schedule);
      }
  
      // Clear form data
      setClassName('');
      setSchedule({
        Monday: new Array(8).fill(''),
        Tuesday: new Array(8).fill(''),
        Wednesday: new Array(8).fill(''),
        Thursday: new Array(8).fill(''),
        Friday: new Array(8).fill('')
      });
      // Reset timetable data
      setSelectedClass('');
      setOpenModal(false);
    } catch (error) {
      console.error('Error submitting schedule:', error);
      alert('Failed to submit schedule. Check console for more details.');
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      <div className="m-10 bg-gray-400 rounded-md p-8">
        <h1 className="text-3xl mb-4">Student Result</h1>
        <div className="flex items-center">
          <label className="text-lg mr-4" htmlFor="classSelect">
            Select Class:
          </label>
          <select
            id="classSelect"
            className="p-2 w-60 rounded-sm outline-none"
            onChange={handleClassSelect}
            value={selectedClass}
          >
            <option value="">Select Class</option>
            {studentClasses}
          </select>
        </div>
      </div>
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-lg font-bold mb-4 text-center">Timetable</h2>
        {timetableData && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-500 table-fixed">
              <thead>
                <tr>
                  <th className="border border-gray-500"></th>
                  {daysOfWeek.map((day, index) => (
                    <th key={index} className="border border-gray-500">{day}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 8 }).map((_, index) => (
                  <tr key={index}>
                    <td className="border border-gray-500">Period {index + 1}</td>
                    {daysOfWeek.map((day, dayIndex) => (
                      <td key={dayIndex} className="border border-gray-500">
                        {schedule[day][index] || (index === 4 ? 'Lunch Break' : '')}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeTableStudentByTeacher;
