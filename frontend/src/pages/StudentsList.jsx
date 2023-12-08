// StudentsList.jsx
import React, { useState } from 'react';
import StudentDetail from './Studentdetail';

const StudentsList = () => {
  const studentsData = [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "username": "john_doe",
      "password": "P@ssw0rd1",
      "country": "USA",
      "city": "Dallas, Texas"
    },
    {
      "name": "Mike Johnson",
      "email": "mike.johnson@example.com",
      "username": "mike_j",
      "password": "MyP@ssword123",
      "country": "USA",
      "city": "Death Valley"
    },
    {
      "name": "Emily Davis",
      "email": "emily.davis@example.com",
      "username": "emily_d",
      "password": "StrongP@ss!",
      "country": "USA",
      "city": "Gerogia"
    },
    {
      "name": "Alex Brown",
      "email": "alex.brown@example.com",
      "username": "alex_brown",
      "password": "BrownPassw0rd",
      "country": "USA",
      "city": "Dallas, Texas"
    },
    {
      "name": "Sophia White",
      "email": "sophia.white@example.com",
      "username": "sophia_w",
      "password": "SecureSoph1@!",
      "country": "USA",
      "city": "Dallas, Texas"
    },
    {
      "name": "Daniel Miller",
      "email": "daniel.miller@example.com",
      "username": "daniel_m",
      "password": "D@nielPass123",
      "country": "USA",
      "city": "Dallas, Texas"
    },
    {
      "name": "Olivia Lee",
      "email": "olivia.lee@example.com",
      "username": "olivia_l",
      "password": "L33Olivia",
      "country": "USA",
      "city": "Arizona"
    },
    {
      "name": "William Turner",
      "email": "william.turner@example.com",
      "username": "will_turner",
      "password": "W!lliamPassw0rd",
      "country": "USA",
      "city": "Chicago"
    },
    {
      "name": "Ava Martinez",
      "email": "ava.martinez@example.com",
      "username": "ava_m",
      "password": "Martinez123@",
      "country": "India",
      "city": "Delhi"
    },
    
  ];

  const [selectedStudent, setSelectedStudent] = useState(null);

  const openStudentDetailModal = (student) => {
    setSelectedStudent(student);
  };

  const closeStudentDetailModal = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Students List</h2>
      <p className="mb-4 text-gray-600">* Click on a name to view more details.</p>
      <table className="w-full border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Sr. No.</th>
            <th className="py-2 px-4 border-b">Student Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Password</th>
            {/* Add more columns as needed */}
          </tr>
        </thead>
        <tbody>
          {studentsData.map((student, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{index + 1}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => openStudentDetailModal(student)}
                  className="text-blue-500 hover:underline cursor-pointer"
                >
                  {student.name}
                </button>
              </td>
              <td className="py-2 px-4 border-b">{student.email}</td>
              <td className="py-2 px-4 border-b">{student.username}</td>
              <td className="py-2 px-4 border-b">{student.password}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
        </tbody>
      </table>

      {selectedStudent && (
        <StudentDetail student={selectedStudent} onClose={closeStudentDetailModal} />
      )}
    </div>
  );
};

export default StudentsList;
