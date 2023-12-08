// StudentDetailModal.jsx
import React from 'react';

const StudentDetail = ({ student, onClose, onEdit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Student Detail</h2>
        <div className="mb-4">
          <p className="text-lg font-semibold">Name: {student.name}</p>
          <p className="text-lg font-semibold">Email: {student.email}</p>
          <p className="text-lg font-semibold">Password: {student.password}</p>
          <p className="text-lg font-semibold">Country: {student.country}</p>
          <p className="text-lg font-semibold">City: {student.city}</p>
          {/* Add other student details here */}
        </div>
        <div className="flex justify-between">
          <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Edit
          </button>
          <button onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-md">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentDetail;
