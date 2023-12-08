import React, { useState } from 'react';
import authenticateUser from '../pages/fakeApi'; // Adjust the path based on your project structure

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');

  const [showForm, setShowForm] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.username) {
      setErrors({ ...errors, username: 'Username is required' });
      return;
    }

    if (!formData.password) {
      setErrors({ ...errors, password: 'Password is required' });
      return;
    }

    // Simulate authentication
    const authenticatedUser = authenticateUser(formData.username, formData.password);

    if (authenticatedUser && authenticatedUser.role === selectedRole) {
      // Successfully authenticated
      setLoginMessage('Successfully logged in');
    } else {
      // Authentication failed
      setLoginMessage('Invalid username or password');
    }

    // Reset form data after submission
    setFormData({
      username: '',
      password: '',
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
        {!showForm ? (
          <div className="mb-6 text-center">
            <p className="text-gray-700 mb-2">Select your role:</p>
            <button
              className="w-24 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none mr-4"
              onClick={() => handleRoleSelection('admin')}
            >
              Admin
            </button>
            <button
              className="w-24 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
              onClick={() => handleRoleSelection('user')}
            >
              User
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">Login as {selectedRole}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="username" className="block text-gray-700">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                />
                {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:outline-none focus:border-gray-500"
                />
                {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
              </div>

              <div className="mb-6 text-center">
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
                >
                  Login
                </button>
              </div>
            </form>

            {loginMessage && (
              <div className="text-center text-green-600 font-bold">
                {loginMessage}
              </div>
            )}

            <div className="text-center">
              <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
