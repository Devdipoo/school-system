import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import viewIcon from "../../assets/viewIcon.png";
import deleteIcon from "../../assets/deleteIcon.png";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const UserDetails = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      role: "Admin",
      email: "admin@example.com",
      createdAt: "2024-01-01",
    },
    {
      id: 2,
      role: "Teacher",
      email: "teacher@example.com",
      createdAt: "2023-12-15",
    },
    {
      id: 3,
      role: "Student",
      email: "student@example.com",
      createdAt: "2024-01-10",
    },
  ]);

  const [userProfile, setUserProfile] = useState(null);
  const [open, setOpen] = useState(false);

  const columns = [
    { field: "role", headerName: "Role", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "createdAt", headerName: "Created At", width: 200 },
    {
      field: "viewProfile",
      headerName: "View Profile",
      width: 150,
      renderCell: (params) => (
        <img
          src={viewIcon}
          onClick={() => handleViewProfile(params.row)}
          alt="View Icon"
          style={{ cursor: "pointer", width: "24px", height: "24px" }} // Adjust icon size here
        />
      ),
    },
    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => (
        <img
          src={deleteIcon}
          onClick={() => handleDeleteProfile(params.row)}
          alt="Delete Icon"
          style={{ cursor: "pointer", width: "24px", height: "24px" }} // Adjust icon size here
        />
      ),
    },
  ];

  // Handle view profile modal
  const handleViewProfile = (row) => {
    // Simulate fetching user profile details
    const profile = {
      email: row.email,
      role: row.role,
      name: row.role === "Admin" ? "Admin User" : row.role === "Teacher" ? "Mr. Smith" : "John Doe",
      age: 30,
      phone: "123-456-7890",
      address: "123 Main St.",
    };

    setUserProfile(profile);
    setOpen(true);
  };

  // Handle delete profile
  const handleDeleteProfile = (row) => {
    // Simulate deleting the user profile
    const updatedUsers = users.filter((user) => user.email !== row.email);
    setUsers(updatedUsers);
    alert("User deleted successfully!");
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <div className="m-10 bg-gray-400 rounded-md">
            <h1 className="p-5 text-3xl">User Details</h1>
          </div>
          <Box className="m-10 rounded-md" sx={{ height: 400 }}>
            <DataGrid
              rows={users}
              columns={columns}
              pageSize={5}
              checkboxSelection
              disableRowSelectionOnClick
              getRowId={(row) => row.id}
            />
          </Box>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            User Profile
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {userProfile && Object.keys(userProfile).map((key) => (
              <div key={key}>
                <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}: </strong>
                {userProfile[key]}
                <br />
              </div>
            ))}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default UserDetails;
