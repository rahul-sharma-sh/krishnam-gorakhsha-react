import React from "react";

const LoginPage = () => {
  return (
    <div className="flex h-screen bg-orange-50">
      {/* Left Side - Image Section */}
      <div className="w-1/2 hidden md:flex items-center justify-center relative overflow-hidden">
        <img
          src="https://source.unsplash.com/800x600/?cows,farm"
          alt="Cows"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-5 left-5 text-white text-3xl font-bold bg-orange-600 px-4 py-2 rounded-md">
          Shree Krishnayan
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-6 text-orange-700">Sign In into your account</h2>
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Registered Email / Mobile</label>
            <input
              type="text"
              placeholder="name@example.com"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <a href="#" className="text-orange-500 hover:underline">Forgot password?</a>
          </div>
          <button className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account?{' '}
            <a href="#" className="text-orange-500 hover:underline">Signup</a>
          </p>
          <button className="w-full flex items-center justify-center border mt-4 py-3 rounded-md hover:bg-gray-100 transition">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
