import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import { User, Lock, MessageCircle } from 'lucide-react';
import 'react-toastify/dist/ReactToastify.css';
import '@/assets/css/blink.css'; // Import for border design
import axios from 'axios';

const UserDashboard = () => {
  const [editModel, setEditModel] = useState(false);
  const [editKeyModel, setEditKeyModel] = useState(false);
  const [userData, setUserData] = useState({
    id: 0,
    name: '',
    phone: '',
    address: '',
    email: ''
  });

  // Fetch user data from the backend based on email stored in localStorage
  useEffect(() => {
    const fetchUserData = async () => {
      const email = localStorage.getItem('email');
      if (email) {
        try {
          const response = await axios.get(`http://localhost:8080/api/auth/get/${email}`);
          setUserData({
            id: response.data.id,
            name: response.data.name,
            phone: response.data.phone,
            address: response.data.address,
            email: response.data.email
          });
          localStorage.setItem('userData', JSON.stringify(response.data));
        } catch (error) {
          console.error('Error fetching user data:', error);
          toast.error('Error fetching user data!');
        }
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting:', userData); // Debugging line

    try {
      const res = await axios.put(`http://localhost:8080/api/auth/update/${userData.id}`, userData);
      if (res.status === 200) {
        setEditModel(false);
        toast.success('User Updated!');
      } else {
        toast.error('Update Failed!');
      }
    } catch (error) {
      toast.error('An error occurred!');
      console.error('Update error:', error); // Debugging line
    }
  };

  const handleEditClose = () => {
    setEditModel(false);
  };

  const handleEditKeyClose = () => {
    setEditKeyModel(false);
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* User Info Section */}
          <div className="shadow-md rounded-lg p-6 border border-gray-200 blink-border flex-1">
            <h2 className="text-2xl font-semibold mb-4">User Dashboard</h2>
            <div className="flex items-center space-x-4">
              <User className="text-blue-600 w-16 h-16" />
              <div>
                <p className="text-lg"><strong>Name:</strong> {userData.name}</p>
                <p className="text-lg"><strong>Email:</strong> {userData.email}</p>
                <p className="text-lg"><strong>Phone:</strong> {userData.phone}</p>
                <p className="text-lg"><strong>Address:</strong> {userData.address}</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <button onClick={() => setEditModel(true)} className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Edit Profile</button>
              <button onClick={() => setEditKeyModel(true)} className="bg-gray-500 px-4 py-2 rounded-md hover:bg-gray-600">Change Password</button>
            </div>
          </div>

          {/* Notifications Section */}
          <div className="shadow-md rounded-lg p-4 border border-gray-200 blink-border flex-1">
            <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
              <MessageCircle className="w-5 h-5 mr-2 text-green-500" /> Recent Messages
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center p-2 hover:bg-gray-50 rounded">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-500 font-semibold">VJ</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-black">Joseph Vijay</h3>
                  <p className="text-xs text-gray-500">Hello, is the property still available?</p>
                </div>
                <span className="text-xs text-gray-700">2m ago</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-50 rounded">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-green-500 font-semibold">RJ</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-black">Romario Jesuraj</h3>
                  <p className="text-xs text-gray-500">Thank you for the quick response!</p>
                </div>
                <span className="text-xs text-gray-700">1h ago</span>
              </li>
              <li className="flex items-center p-2 hover:bg-gray-50 rounded">
                <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-blue-500 font-semibold">AK</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-black">Ajith Kumar</h3>
                  <p className="text-xs text-gray-500">Can I rent your house for Vidaamuyarchi shoot?</p>
                </div>
                <span className="text-xs text-gray-700">4h ago</span>
              </li>
            </ul>
          </div>
        </div>

        {editModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="p-6 rounded-lg shadow-lg w-96 border border-gray-200 blink-border">
              <h3 className="text-xl font-semibold mb-4">Edit Profile</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  value={userData.name}
                  className="w-full p-2 border-none rounded-md"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="phone"
                  placeholder="Phone"
                  value={userData.phone}
                  className="w-full p-2 border-none rounded-md"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  id="address"
                  placeholder="Address"
                  value={userData.address}
                  className="w-full p-2 border-none rounded-md"
                  onChange={handleChange}
                  required
                />
                <div className="flex justify-end space-x-4">
                  <button type="button" onClick={handleEditClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
                  <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Update Profile</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {editKeyModel && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96 border border-gray-200 blink-border">
              <h3 className="text-xl font-semibold mb-4">Change Password</h3>
              <form className="space-y-4">
                <input
                  type="password"
                  placeholder="Old Password"
                  className="w-full p-2 border-none rounded-md"
                />
                <input
                  type="password"
                  placeholder="New Password"
                  className="w-full p-2 border-none rounded-md"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-2 border-none rounded-md"
                />
                <div className="flex justify-end space-x-4">
                  <button type="button" onClick={handleEditKeyClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400">Cancel</button>
                  <button type="submit" className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600">Update Password</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <Toaster />
    </>
  );
};

export default UserDashboard;
