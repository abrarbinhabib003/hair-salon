import React, { useState } from "react";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [selectedTab, setSelectedTab] = useState("register");


  const switchTab = (tab) => {
    setSelectedTab(tab);
    setIsRegister(tab === "register");
  };

  return (
    <section className="h-screen flex items-center justify-center bg-gray-100">
      <div className="flex max-w-screen-lg w-full shadow-lg bg-white rounded-lg">
        
        <div className="hidden lg:block w-1/2">
          <img
            src="./assets/auth.jpeg"
            alt="Auth Image"
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>

 
        <div className="w-full lg:w-1/2 p-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-700">
              {isRegister ? "Create an Account" : "Login to Your Account"}
            </h2>
          </div>

          <div className="flex justify-center mb-4">
            <button
              className={`w-1/2 py-2 rounded-tl-lg rounded-bl-lg ${selectedTab === "register" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => switchTab("register")}
            >
              Register
            </button>
            <button
              className={`w-1/2 py-2 rounded-tr-lg rounded-br-lg ${selectedTab === "login" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              onClick={() => switchTab("login")}
            >
              Login
            </button>
          </div>

        
          <form className="space-y-4">
            {isRegister && (
              <>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@example.com"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phone"
                    placeholder="+123 456 789"
                    className="w-full p-3 border border-gray-300 rounded-md mt-1"
                  />
                </div>
              </>
            )}

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="********"
                className="w-full p-3 border border-gray-300 rounded-md mt-1"
              />
            </div>

            {isRegister && (
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <select
                  id="address"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1"
                >
                  <option value="">Select an Address</option>
                  <option value="address1">Address 1</option>
                  <option value="address2">Address 2</option>
                  <option value="address3">Address 3</option>
                </select>
              </div>
            )}

            {/* Image Upload (Not Required) */}
            {isRegister && (
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Profile Image (Optional)
                </label>
                <input
                  type="file"
                  id="image"
                  className="w-full p-3 border border-gray-300 rounded-md mt-1"
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
                className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                {isRegister ? "Register" : "Login"}
              </button>
            </div>
          </form>

          <div className="mt-6 text-center">
            <span className="text-sm text-gray-600">or sign in with</span>
            <div className="flex justify-center gap-4 mt-2">
              <button className="text-blue-600 hover:text-blue-700">
                <FaFacebookF size={24} />
              </button>
              <button className="text-red-600 hover:text-red-700">
                <FaGoogle size={24} />
              </button>
              <button className="text-gray-800 hover:text-black">
                <FaGithub size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
