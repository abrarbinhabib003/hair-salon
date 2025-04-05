import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p>123 Main Street, Suite 400</p>
            <p>City, State, Zip Code</p>
            <p>Email: support@example.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:border-2 p-1">Home</a></li>
              <li><a href="#" className="hover:border-2 p-1">About Us</a></li>
              <li><a href="#" className="hover:border-2 p-1">Services</a></li>
              <li><a href="#" className="hover:border-2 p-1">Blog</a></li>
              <li><a href="#" className="hover:border-2 p-1">Contact</a></li>
            </ul>
          </div>

     
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-500">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-700">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-500">
                <FaInstagram />
              </a>
            </div>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex flex-col">
              <input
                type="email"
                className="px-4 py-2 mb-4 text-gray-900 rounded-md"
                placeholder="Enter your email"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

       
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
