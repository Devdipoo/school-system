
import SideBarHeader from '../../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../../Common/sideBarComponent/SideBarComponent'

import dashBoardIcon from '../../../assets/dashBoardIcon.svg'
import profileIcon from '../../../assets/profileIcon.svg'
import attedenceIcon from '../../../assets/attendenceIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import feedbackIcon from '../../../assets/feedbackIcon.svg'

function StudentSideBar() {
  return (
    <div className="text-white" style={{ backgroundColor: '#052955' }}>
      <SideBarHeader />
      <SideBarComponent
        componentName="Dashboard"
        componentIcon={dashBoardIcon}
        to="/student"
      />
      <SideBarComponent
        componentName="Profile"
        componentIcon={profileIcon}
        to="/student/profile"
      />
      <SideBarComponent
        componentName="Attendence"
        componentIcon={attedenceIcon}
        to="/student/attendence"
      />
      <SideBarComponent
        componentName="Result"
        componentIcon={resultIcon}
        to="/student/result"
      />
      <SideBarComponent
        componentName="Time-Table"
        componentIcon={timeTableIcon}
        to="/student/time-table"
      />
      <SideBarComponent
        componentName="Assignment"
        componentIcon={assignmentIcon}
        to="/student/assignment"
      />
      <SideBarComponent
        componentName="Notice"
        componentIcon={noticeIcon}
        to="/student/notice"
      />
      <SideBarComponent
        componentName="Feedback"
        componentIcon={feedbackIcon}
        to="/student/feedback"
      />
    </div>
  )
}

export default StudentSideBar
