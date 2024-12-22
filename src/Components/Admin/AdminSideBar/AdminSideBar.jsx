import SideBarHeader from '../../Common/sideBarHeader/SideBarHeader'
import SideBarComponent from '../../Common/sideBarComponent/SideBarComponent'
import dashBoardIcon from "../../../assets/dashBoardIcon.svg"
import profileIcon from '../../../assets/profileIcon.svg'
import resultIcon from '../../../assets/resultIcon.svg'
import timeTableIcon from '../../../assets/timeTableIcon.svg'
import assignmentIcon from '../../../assets/assignmentIcon.svg'
import noticeIcon from '../../../assets/noticeIcon.svg'
import feedbackIcon from '../../../assets/feedbackIcon.svg'
import attendenceIcon from '../../../assets/attendenceIcon.svg'




function AdminSideBar() {
  return (
    <div className="text-white" style={{ backgroundColor: '#052955' }}>
      <SideBarHeader />
      <SideBarComponent
        componentName="Dashboard"
        componentIcon={dashBoardIcon}
      />
      <SideBarComponent componentName="Profile" componentIcon={profileIcon} to="/admin/profile" />
      <SideBarComponent
        componentName="Attendence"
        componentIcon={attendenceIcon}
      />
      <SideBarComponent componentName="Result" to="/admin/result" componentIcon={resultIcon} />
      <SideBarComponent
        componentName="Time-Table"
        componentIcon={timeTableIcon}
        to="/admin/time-table"
      />
      <SideBarComponent
        componentName="Assignment"
        componentIcon={assignmentIcon}
        to="/admin/assignment"
      />
      <SideBarComponent componentName="Notice" componentIcon={noticeIcon} to="/admin/notice" />
      <SideBarComponent componentName="User Detail" componentIcon={feedbackIcon} to="/admin/userdetail" />
    </div>
  )
}

export default AdminSideBar
