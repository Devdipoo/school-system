import { useState } from "react";
import profileImage from "../../../assets/profileImage.png";

function AdminProfile() {
  // Hardcoded admin details
  const [adminDetailInput] = useState([
    {
      name: "Admin Name",
      post: "Administrator",
      email: "admin@example.com",
      phoneNumber: "123-456-7890",
      _id: "12345", // Optional, can be removed if not necessary for the UI
    }
  ]);
  const [editProfile, setEditProfile] = useState(false);
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const openEditProfileModal = () => {
    setNewPhoneNumber(adminDetailInput[0].phoneNumber);
    setEditProfile(true);
  };

  const closeEditProfileModal = () => {
    setEditProfile(false);
  };

  const handlePhoneNumberChange = (e) => {
    setNewPhoneNumber(e.target.value);
  };

  return (
    <div className="p-10 flex justify-center box-border rounded-md">
      {adminDetailInput.map((admindetail) => (
        <div
          className="flex gap-10 p-10 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          key={admindetail.name}
        >
          <img src={profileImage} className="h-36 w-36" alt="profileImage" />
          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl">{admindetail.name}</h1>
              <button
                onClick={openEditProfileModal}
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-1 me-2 dark:focus:ring-yellow-900"
              >
                Edit
              </button>
            </div>
            <table className="border-collapse w-full mt-4">
              <tbody>
                <tr>
                  <td className="p-1.5 font-bold">Post:</td>
                  <td className="p-1.5">{admindetail.post}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Name:</td>
                  <td className="p-1.5">{admindetail.name}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Email:</td>
                  <td className="p-1.5">{admindetail.email}</td>
                </tr>
                <tr>
                  <td className="p-1.5 font-bold">Phone Number:</td>
                  <td className="p-1.5">{admindetail.phoneNumber}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
      {editProfile && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
            <div
              className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      Update Phone Number
                    </h3>
                    <div className="mt-5">
                      <input
                        type="text"
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
                        placeholder="Enter new phone number"
                        value={newPhoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={() => {
                    // Handle phone number update logic (UI update only)
                    setEditProfile(false);
                  }}
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-white hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Update
                </button>
                <button
                  onClick={closeEditProfileModal}
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminProfile;
