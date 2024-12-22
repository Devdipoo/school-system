import { useNavigate } from 'react-router-dom'; 
import { Link } from 'react-router-dom';
import schoolbackground from "../../assets/schoolbackground.jpg";

function SignIn() {
  const navigate = useNavigate(); // To navigate programmatically
  // Removed the error state since it's not being used anymore

  // This function is now only for UI demonstration and doesn't send requests.
  const handleSignIn = (e) => {
    e.preventDefault();
    // Simulating a successful sign-in process without backend calls
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    // Simulate a successful login
    console.log("User Email:", data.email);
    console.log("User Password:", data.password);
    
    // Redirect to the "student" dashboard (or any other page) on successful sign-in simulation
    // You can use `navigate` here if needed, but in this version, it's just static.
    navigate('student'); // Navigate to teacher dashboard after successful sign-in

  };

  return (
    <div className="flex min-h-screen">
      {/* Image Container */}
      <div className="w-1/2 flex justify-center items-center bg-gray-100">
        <img src={schoolbackground} alt="School Background" className="w-full h-full" />
      </div>

      {/* Form Container */}
      <div className="w-1/2 flex justify-center items-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form onSubmit={handleSignIn} className="mt-8 space-y-6">
            {/* Form fields */}
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="text-center text-sm">
            Don&apos;t have an account?{' '}
            <Link
              to="/signup"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
