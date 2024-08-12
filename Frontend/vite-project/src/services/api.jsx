import axios from "axios";

const API_URL = "http://localhost:8080";

const axiosInstance = axios.create({
  baseURL: API_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  login: async (email, password) => {
    const response = await axiosInstance.post("/api/auth/login", {
      email,
      password,
    });
    if (response.data) {
      localStorage.setItem("token", response.data);
    }
    return response.data;
  },
  logout: async () => {
    try {
      await axiosInstance.post("/api/auth/logout");
    } finally {
      localStorage.removeItem("token");
    }
  },
  register: async (name, email, phone, address, password) => {
    const response = await axiosInstance.post("/api/auth/register", {
      name,
      email,
      phone,
      address,
      password,
    });
    return response.data;
  },
  // New function to create an admin
  createAdmin: async () => {
    try {
      const response = await axiosInstance.post("/admin/create");
      return response.data;
    } catch (error) {
      console.error("Error creating admin:", error);
      throw error;
    }
  },
};

const SignUp = (name, email, phone, address, password) => axios.post(`${baseURL}/auth/register`, { name, email, phone, address, password });

const getAllUsers = () => axiosInstance.get('/users/all');
const CreateUser = (name, email, role, phone, address, password) => axiosInstance.post('/user/add', { name, email, role, phone, address, password });

// Fetch user data by email
export const getUserDataByEmail = async (email) => {
  try {
    const response = await axiosInstance.get(`api/auth/user/email/${email}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user data by email:', error);
    throw error;
  }
};

// Update user data by email
export const UpdateUserByEmail = async (email, userData) => {
  try {
    const response = await axiosInstance.put(`api/auth/user/email/${email}`, userData);
    return response;
  } catch (error) {
    throw new Error('Error updating user');
  }
};

export { axiosInstance, SignUp, getAllUsers, CreateUser };
