import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-600 text-white py-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ilham Muttaqin Website. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
            GitHub
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
            LinkedIn
          </a>
          <a href="mailto:your-email@example.com" className="hover:text-purple-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
