import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import authImg from './assets/auth.jpeg';

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [selectedTab, setSelectedTab] = useState("register");

  const switchTab = (tab) => {
    setSelectedTab(tab);
    setIsRegister(tab === "register");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-teal-100">
      <div className="flex max-w-3xl w-full shadow-2xl bg-white rounded-2xl overflow-hidden border border-gray-200">
        {/* Left Side Image */}
        <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 to-teal-400 items-center justify-center">
          <img
            src={authImg}
            alt="Auth"
            className="max-h-[90vh] max-w-full object-contain p-4"
          />
        </div>
        {/* Right Side Form */}
        <div className="w-full lg:w-1/2 p-10 flex flex-col justify-center">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight mb-2">
              {isRegister ? "Create an Account" : "Login to Your Account"}
            </h2>
            <p className="text-gray-500 text-sm">
              {isRegister ? "Join us for a premium salon experience!" : "Welcome back! Please login to continue."}
            </p>
          </div>
          <div className="flex justify-center mb-6">
            <button
              className={`w-1/2 py-2 rounded-tl-lg rounded-bl-lg font-semibold transition-colors duration-200 ${selectedTab === "register" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
              onClick={() => switchTab("register")}
            >
              Register
            </button>
            <button
              className={`w-1/2 py-2 rounded-tr-lg rounded-br-lg font-semibold transition-colors duration-200 ${selectedTab === "login" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
              onClick={() => switchTab("login")}
            >
              Login
            </button>
          </div>
          <form className="space-y-5">
            {isRegister && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="+123 456 789"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>
              </>
            )}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            {isRegister && (
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <select
                  id="address"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="">Select an Address</option>
                  <option value="address1">Address 1</option>
                  <option value="address2">Address 2</option>
                  <option value="address3">Address 3</option>
                </select>
              </div>
            )}
            {isRegister && (
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700 mb-1">
                  Profile Image (Optional)
                </label>
                <input
                  type="file"
                  id="image"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
            )}
            {selectedTab === "login" && (
              <div className="text-right text-sm">
                <a href="#" className="text-blue-600 hover:underline">
                  Forgot password?
                </a>
              </div>
            )}
            <div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md font-semibold shadow-md hover:from-blue-700 hover:to-teal-600 transition-all duration-200"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
          </form>
          <div className="mt-8 text-center">
            <span className="text-sm text-gray-500">or sign in with</span>
            <div className="flex justify-center gap-5 mt-3">
              <button className="bg-blue-100 hover:bg-blue-200 text-blue-700 p-2 rounded-full shadow transition-colors duration-200">
                <FaFacebookF size={22} />
              </button>
              <button className="bg-red-100 hover:bg-red-200 text-red-600 p-2 rounded-full shadow transition-colors duration-200">
                <FaGoogle size={22} />
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-2 rounded-full shadow transition-colors duration-200">
                <FaGithub size={22} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
