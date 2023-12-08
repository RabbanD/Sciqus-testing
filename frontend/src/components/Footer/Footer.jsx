import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p>&copy; 2023 FrontEnd Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
