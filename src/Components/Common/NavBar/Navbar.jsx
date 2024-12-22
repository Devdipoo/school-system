import './navbar.css'
import searchIcon from '../../../assets/searchIcon.svg'
import dropdownIcon from '../../../assets/dropdownIcon.svg'
import profileImage from '../../../assets/profileImage.png'
import notificationBellIcon from '../../../assets/notificationBellIcon.svg'
import messageIcon from '../../../assets/messageIcon.svg'




function Navbar() {
  return (
    <div className="navbar-box">
      <div className="flex gap-2 mt-3">
        <img className="h-6 w-6 mt-1" src={searchIcon} alt="Search Icon" />
        <input
          className="p-1 rounded-md h-8"
          type="text"
          placeholder="Find Something..."
        />
      </div>
      <div className="flex gap-6 mt-2">
        <div className="flex gap-2">
          <div>
            <h1>My</h1>
            <p>Profile</p>
          </div>
          <img
            className="h-3 w-3 mt-1"
            src={dropdownIcon}
            alt="dropdown Icon"
          />
          <img
            className="h-8 w-8 mt-1"
            src={profileImage}
            alt="profile Image"
          />
        </div>
        <div className="flex gap-4">
          <div>
            <div className="notificationNumber">1</div>
            <img
              className="h-8 w-6 mt-1"
              src={messageIcon}
              alt="message Icon"
            />
          </div>
          <div>
            <div className="notificationNumber">2</div>
            <img
              className="h-8 w-6 mt-1"
              src={notificationBellIcon}
              alt="notification bell Icon"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
