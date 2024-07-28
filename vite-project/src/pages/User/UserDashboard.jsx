import React from 'react';
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  Briefcase,
  DollarSign,
  BarChart2,
  MessageCircle,
  Calendar,
  Clock,
  AlertCircle,
  AlertTriangleIcon
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const dataLine = [
  { name: 'Mon', uv: 400 },
  { name: 'Tue', uv: 300 },
  { name: 'Wed', uv: 500 },
  { name: 'Thu', uv: 200 },
  { name: 'Fri', uv: 278 },
  { name: 'Sat', uv: 189 },
  { name: 'Sun', uv: 239 },
];

const UserDashboard = () => {
  return (
    <div className="p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
          <div className="mr-4 p-3 bg-purple-100 rounded-full">
            <Briefcase className="w-6 h-6 text-purple-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-gray-600">Total Properties</h2>
            <p className="text-2xl font-bold text-gray-800">1,250</p>
            <p className="text-green-500 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" /> 8% increase
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
          <div className="mr-4 p-3 bg-blue-100 rounded-full">
            <Users className="w-6 h-6 text-blue-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-gray-600">Today's Users</h2>
            <p className="text-2xl font-bold text-gray-800">2,300</p>
            <p className="text-green-500 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" /> 3% increase
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
          <div className="mr-4 p-3 bg-green-100 rounded-full">
            <DollarSign className="w-6 h-6 text-green-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-gray-600">Revenue</h2>
            <p className="text-2xl font-bold text-gray-800">$103,430</p>
            <p className="text-green-500 flex items-center text-sm">
              <TrendingUp className="w-4 h-4 mr-1" /> 5% increase
            </p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
          <div className="mr-4 p-3 bg-orange-100 rounded-full">
            <ShoppingCart className="w-6 h-6 text-orange-500" />
          </div>
          <div>
            <h2 className="text-md font-semibold text-gray-600">New Orders</h2>
            <p className="text-2xl font-bold text-gray-800">350</p>
            <p className="text-red-500 flex items-center text-sm">
              <TrendingDown className="w-4 h-4 mr-1" /> 2% decrease
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow-lg col-span-2">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
            <BarChart2 className="w-5 h-5 mr-2 text-blue-500" /> Sales Analytics
          </h2>
          <div className="bg-white p-3 rounded-lg shadow-md h-64">
            <h3 className="text-md font-semibold mb-2 text-black p-2">Daily User Visits</h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={dataLine}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="uv" stroke="#8884d8" dot={{ fill: 'yellow', r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
            <MessageCircle className="w-5 h-5 mr-2 text-green-500" /> Recent Messages
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-500 font-semibold">VJ</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Joseph Vijay</h3>
                <p className="text-xs text-gray-500">Hello, is the property still available?</p>
              </div>
              <span className="text-xs text-gray-600">2m ago</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                <span className="text-green-500 font-semibold">RJ</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Romario Jesuraj</h3>
                <p className="text-xs text-gray-500">Thank you for the quick response!</p>
              </div>
              <span className="text-xs text-gray-600">1h ago</span>
            </li>
            <li className="flex items-center p-2 hover:bg-gray-50 rounded">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <span className="text-blue-500 font-semibold">AK</span>
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-medium text-black">Ajith Kumar</h3>
                <p className="text-xs text-gray-500">Can I rent your house for Vidaamuyarchi shoot?</p>
              </div>
              <span className="text-xs text-gray-600">4h ago</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
            <AlertTriangleIcon className="w-5 h-5 mr-2 text-yellow-500" /> Recent Alerts
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center text-sm p-2 hover:bg-gray-50 rounded">
              <AlertCircle className="w-4 h-4 mr-3 text-green-500 flex-shrink-0" />
              <span className='text-black flex-grow'>New property available for sale</span>
              <span className="text-xs text-gray-600">2m ago</span>
            </li>
            <li className="flex items-center text-sm p-2 hover:bg-gray-50 rounded">
              <AlertCircle className="w-4 h-4 mr-3 text-red-500 flex-shrink-0" />
              <span className='text-black flex-grow'>Server load high on ap-south-1 (Mumbai)</span>
              <span className="text-xs text-gray-600">15m ago</span>
            </li>
            <li className="flex items-center text-sm p-2 hover:bg-gray-50 rounded">
              <AlertCircle className="w-4 h-4 mr-3 text-blue-500 flex-shrink-0" />
              <span className='text-black flex-grow'>Scheduled maintenance in 2 days</span>
              <span className="text-xs text-gray-600">3h ago</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-purple-500" /> Upcoming Events
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-12 h-12 rounded bg-purple-100 flex items-center justify-center mr-3">
                <Calendar className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-black">Team Meeting</h3>
                <p className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-gray-600" /> Tomorrow, 10:00 AM
                </p>
              </div>
            </li>
            <li className="flex items-center">
              <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center mr-3">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-sm font-medium text-black">Client Presentation</h3>
                <p className="text-xs text-gray-500 flex items-center">
                  <Clock className="w-3 h-3 mr-1 text-gray-600" /> Jul 30, 2:00 PM
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
