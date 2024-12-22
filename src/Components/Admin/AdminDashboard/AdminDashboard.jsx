import DashboardPageComponents from '../../Common/dashboardPageComponents/DashboardPageComponents'
import profileIcon from '../../../assets/profileIcon.svg'
import attedenceIcon from '../../../assets/attendenceIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import passwordChangeIcon from '../../../assets/passwordChangeIcon.svg'
import teacherAttendence from '../../../assets/teacherAttendence.svg'
import teacherSchedule from '../../../assets/teacherSchedule.svg'
import studentDetails from '../../../assets/studentDetails.svg'
import teacherReviews from '../../../assets/teacherReviews.svg'
import feeCollectionIcon from '../../../assets/feeCollectionIcon.svg'
import investmentRecordIcon from '../../../assets/investmentRecordIcon.svg'
import salaryRecordIcon from '../../../assets/salaryRecordIcon.svg'

function AdminDashboard() {
  return (
    <div className="dashboardContentContainer">
      <DashboardPageComponents icon={profileIcon} title="Profile" />
      <DashboardPageComponents icon={studentDetails} title="Student Details" />
      <DashboardPageComponents icon={attedenceIcon} title="Student Attendence" />
      <DashboardPageComponents icon={resultIcon} title="Student Result" />
      <DashboardPageComponents icon={timeTableIcon} title="Students Time Table" />
       <DashboardPageComponents icon={teacherSchedule} title="Teacher Time Table" /> 
       <DashboardPageComponents icon={teacherAttendence} title="Attendence" />
      <DashboardPageComponents icon={feeCollectionIcon} title="Fee Collection" />
      <DashboardPageComponents icon={investmentRecordIcon} title="Investment" />
      <DashboardPageComponents icon={salaryRecordIcon} title="Salary Record" /> 
      <DashboardPageComponents icon={assignmentIcon} title="Assignment" />
      <DashboardPageComponents icon={noticeIcon} title="Notice" />
       <DashboardPageComponents icon={teacherReviews} title="Reviews" />
      <DashboardPageComponents icon={passwordChangeIcon} title="Change Password" /> 
    </div>
  )
}

export default AdminDashboard
