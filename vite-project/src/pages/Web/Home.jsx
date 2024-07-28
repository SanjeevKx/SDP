import React from 'react';
import { Search, Home, User, Key } from 'lucide-react';
import Footer from '@/components/Web/Footer';
import Carousel from '@/components/Carousel';

const HomePage = () => {
  return (
    // <div className="w-full min-h-screen">
    <div className="w-full min-h-screen relative">

      <Carousel />
      <div className="absolute top-1/2 left-1/2 p-4 sm:p-8 md:p-12 lg:p-16 max-w-lg text-white transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">
          Find Your Dream Place
        </h1>
        <p className="text-sm sm:text-base mb-4 sm:mb-6">
          We are glad to have you around. Feel free to browse our website.
        </p>
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Find a location"
            className="w-full p-3 sm:p-4 rounded-full text-gray-900 pr-12 text-sm sm:text-base border-none"
          />
          <button
            className="absolute right-2 top-2 bottom-2 px-3 bg-gray-800 text-white rounded-full hover:bg-orange-400 transition-colors"
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="p-8">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Find Properties in These Cities</h2>
          <p className="text-gray-500 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex items-center p-2 bg-gray-100 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/lycs-architecture-kUdbEEMcRwE-unsplash.jpg?updatedAt=1722084882490" alt="New York" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">New York</h3>
                <p>9 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/san-diego-wallpaper-preview.jpg?updatedAt=1722086243556" alt="San Diego" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">San Diego</h3>
                <p>0 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(8).png?updatedAt=1722086431353" alt="Miami" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">Miami</h3>
                <p>2 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(7).png?updatedAt=1722086451704" alt="Los Angeles" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">Los Angeles</h3>
                <p>1 Property</p>
              </div>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(9).png?updatedAt=1722086536199" alt="Chicago" style={{ width: '40%', height: '100%', objectFit: 'cover' }} />
              <div className="p-2 flex-1 text-sm" style={{ color: 'inherit' }}>
                <h3 className="font-bold">Chicago</h3>
                <p>2 Properties</p>
              </div>
            </div>
            <div className="flex items-center p-2 bg-gray-100 rounded-lg text-left" style={{ width: '180px', height: '100px', overflow: 'hidden' }}>
              <div className="p-2 flex-1 text-center" style={{ color: 'inherit' }}>
                <span className="cursor-pointer font-bold">View All Cities</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-10">Featured Properties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/house-1836070.jpg?updatedAt=1721971607755" alt="Luxury Family Home" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Luxury Family Home</h3>
              <p className="text-gray-500">1800-1818 79th St</p>
              <p className="text-gray-500">4 Beds • 1 Baths • 400 sqft</p>
              <p className="text-red-500 font-bold">$395,000</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/nick-fewings-_AXfP_W4fpU-unsplash.jpg?updatedAt=1722085004832" alt="Skyper Pool Apartment" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Skyper Pool Apartment</h3>
              <p className="text-gray-500">1020 Bloomingdale Ave</p>
              <p className="text-gray-500">4 Beds • 2 Baths • 450 sqft</p>
              <p className="text-red-500 font-bold">$280,000</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/origin.jpg?updatedAt=1722085128281" alt="North Dillard Street" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">North Dillard Street</h3>
              <p className="text-gray-500">4330 Bell Shoals Rd</p>
              <p className="text-gray-500">4 Beds • 2 Baths • 400 sqft</p>
              <p className="text-red-500 font-bold">$250/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/image%20(4).png?updatedAt=1722085492146" alt="Eaton Carth Penthouse" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Eaton Carth Penthouse</h3>
              <p className="text-gray-500">7728 18th Ave</p>
              <p className="text-gray-500">4 Beds • 2 Baths • 450 sqft</p>
              <p className="text-red-500 font-bold">$180,000</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/istockphoto-488120139-612x612.jpg?updatedAt=1722085961645" alt="New Apartment Nice View" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Ely Parkway Apartment</h3>
              <p className="text-gray-500">42 Avenue O, Brooklyn</p>
              <p className="text-gray-500">4 Beds • 1 Baths • 460 sqft</p>
              <p className="text-red-500 font-bold">$850/month</p>
            </div>
            <div className="border p-4 rounded-lg shadow-lg">
              <img src="https://ik.imagekit.io/rqds6dyata/diamond-manor-projects-500x500.webp?updatedAt=1722085831192" alt="Diamond Manor Apartment" className="mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold">Diamond Manor Apartment</h3>
              <p className="text-gray-500">7882 20th Ave, Brooklyn</p>
              <p className="text-gray-500">4 Beds • 2 Baths • 500 sqft</p>
              <p className="text-red-500 font-bold">$259,000</p>
            </div>
          </div>
        </div>

        <div className="w-full min-h-screen flex flex-col items-center justify-center p-8">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-4xl w-full">
            <h2 className="text-3xl text-gray-500 font-bold text-center mb-4">How It works? Find a perfect home</h2>
            <p className="text-gray-500 text-center mb-8">Learn ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="bg-yellow-400 p-4 rounded-full mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-500 text-xl font-bold mb-2">Find Real Estate</h3>
                <p className="text-gray-500 text-center">Sumo petentium ut per, at his wisi unum adipiscing. Est ei graeco</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-400 p-4 rounded-full mb-4">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-500 text-xl font-bold mb-2">Meet Realtor</h3>
                <p className="text-gray-500 text-center">Sumo petentium ut per, at his wisi unum adipiscing. Est ei graeco</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="bg-yellow-400 p-4 rounded-full mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-gray-500 text-xl font-bold mb-2">Take The Keys</h3>
                <p className="text-gray-500 text-center">Sumo petentium ut per, at his wisi unum adipiscing. Est ei graeco</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
