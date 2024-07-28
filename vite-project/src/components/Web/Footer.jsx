import { Instagram, Linkedin, Twitter, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full text-white py-6 mt-auto">
      <div className="max-w-screen-xl mx-auto px-4 relative">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="flex items-center space-x-2 text-2xl mb-4 w-full sm:w-auto">
            <i className="fab fa-slack"></i>
            <span className="font-bold">HomeStyle</span>
          </div>
          <div className="flex space-x-3 mb-4 w-full sm:w-auto justify-center sm:justify-end">
            <a href="#" className="text-white hover:text-blue-400 transition"><Facebook size={20} /></a>
            <a href="#" className="text-white hover:text-blue-400 transition"><Twitter size={20} /></a>
            <a href="#" className="text-white hover:text-pink-400 transition"><Instagram size={20} /></a>
            <a href="#" className="text-white hover:text-blue-400 transition"><Linkedin size={20} /></a>
            <a href="#" className="text-white hover:text-red-400 transition"><Youtube size={20} /></a>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-sm">
          <div>
            <h3 className="font-medium mb-2">Company</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Contact us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">About us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Services</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Rent House</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Buy and sell plots</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Tenant Management</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-400 hover:text-white transition">Apartments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Individual House</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition">Land/Plots</a></li>
            </ul>
          </div>
          <div className="col-span-2 sm:col-span-3 lg:col-span-2 mt-4 lg:mt-0">
            <h3 className="font-medium mb-2">Subscribe</h3>
            <div className="flex flex-col space-y-2">
              <input type="text" placeholder="Enter your email" className="w-45 px-3 py-2 bg-gray-800 text-white text-sm rounded" />
              <button className="w-25 bg-white text-gray-900 px-3 py-2 text-sm font-medium rounded hover:bg-gray-200 transition">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-sm text-gray-400 flex flex-col sm:flex-row justify-between items-center">
          <span>&copy; 2024 HomeStyle. All rights reserved</span>
          <div className="mt-2 sm:mt-0 space-x-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Blogs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
