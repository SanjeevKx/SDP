import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notfound from './pages/Web/Notfound';
import Home from './pages/Web/Home';
import Login from './pages/Web/Login';
import Register from './pages/Web/Register';
import WebLayout from './layout/WebLayout';
import AdminDashboard from './pages/Admin/AdminDashboard';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';
import Agents from './pages/Admin/Agents';
import AdminLogin from './pages/Admin/AdminLogin';
// import Properties from './pages/Admin/Properties';
import UserDashboard from './pages/User/UserDashboard';
import AdminClient from './pages/Admin/AdminClient';
import Properties from './pages/Admin/Properties';
import UserProperty from './pages/User/UserProperty';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
        <Route element={<AdminLayout />}>
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/client' element={<AdminClient />} />
          <Route path='/admin/agents' element={<Agents />} />
          <Route path='/admin/properties' element={<Properties />} />
        </Route>
        <Route element={<UserLayout />}>
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/agents' element={<Agents />} />
          <Route path='/user/properties' element={<UserProperty />} />
        </Route>
        <Route path='*' element={<Notfound />} />
        <Route path='/admin/login' element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
