import { useState } from "react";
import { useNavigate } from "react-router-dom";
import schoolbackground from "../../assets/schoolbackground.jpg";

function SignUp() {
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Validate fields based on role
    switch (role) {
      case "admin":
        if (!name || !email || !post || !secretKey || !password) {
          setErrorMessage("Please fill in all mandatory fields.");
          return;
        }
        break;
      case "student":
        if (!enrollmentNumber || !email || !password || !studentClass) {
          setErrorMessage("Please fill in all mandatory fields.");
          return;
        }
        break;
      case "teacher":
        if (!teacherId || !email || !password) {
          setErrorMessage("Please fill in all mandatory fields.");
          return;
        }
        break;
      case "parents":
        if (!password) {
          setErrorMessage("Please fill in all mandatory fields.");
          return;
        }
        break;
      default:
        setErrorMessage("Please select a role.");
        return;
    }

    const data = {
      role,
      email,
      password,
      ...(name && { name }),
      ...(post && { post }),
      ...(secretKey && { secretKey }),
      ...(enrollmentNumber && { enrollmentNumber }),
      ...(teacherId && { teacherId }),
      ...(studentClass && { studentClass }),
    };

    // Log the collected data (you can also show a success message here)
    console.log("Form data:", data);

    // Navigate to a different page (e.g., sign-in page after successful signup)
    navigate("/signin");
  };

  const renderAdditionalFields = () => {
    switch (role) {
      case "admin":
        return (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <select
                value={post}
                onChange={(e) => setPost(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                <option value="">Select Post</option>
                <option value="Principal">Principal</option>
                <option value="Vice Principal">Vice Principal</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Secret Key"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </>
        );
      case "student":
        return (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Enrollment Number"
                value={enrollmentNumber}
                onChange={(e) => setEnrollmentNumber(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <select
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              >
                <option value="">Select Class</option>
                {[...Array(10).keys()].map((classNum) => (
                  <option key={classNum + 1} value={classNum + 1}>
                    {classNum + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </>
        );
      case "teacher":
        return (
          <>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Teacher ID"
                value={teacherId}
                onChange={(e) => setTeacherId(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </>
        );
      case "parents":
        return (
          <>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <img src={schoolbackground} alt="School Background" className="w-full h-full" />
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign up for an account
            </h2>
          </div>
          <form onSubmit={handleSignUp} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <select
                  id="role"
                  name="role"
                  value={role}
                  onChange={handleRoleChange}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                >
                  <option value="">Select Role</option>
                  <option value="student">Student</option>
                  <option value="teacher">Teacher</option>
                  <option value="parents">Parents</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              {renderAdditionalFields()}
              {errorMessage && (
                <p className="mt-2 text-sm text-red-600">{errorMessage}</p>
              )}
            </div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
