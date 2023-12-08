// fakeApi.js
const studentsData = [
    [
        {
          "name": "John Doe",
          "email": "john.doe@example.com",
          "username": "john_doe",
          "password": "P@ssw0rd1"
        },
        {
          "name": "Jane Smith",
          "email": "jane.smith@example.com",
          "username": "jane_smith",
          "password": "SecureP@ss2"
        },
        {
          "name": "Mike Johnson",
          "email": "mike.johnson@example.com",
          "username": "mike_j",
          "password": "MyP@ssword123"
        },
        {
          "name": "Emily Davis",
          "email": "emily.davis@example.com",
          "username": "emily_d",
          "password": "StrongP@ss!"
        },
        {
          "name": "Alex Brown",
          "email": "alex.brown@example.com",
          "username": "alex_brown",
          "password": "BrownPassw0rd"
        },
        {
          "name": "Sophia White",
          "email": "sophia.white@example.com",
          "username": "sophia_w",
          "password": "SecureSoph1@!"
        },
        {
          "name": "Daniel Miller",
          "email": "daniel.miller@example.com",
          "username": "daniel_m",
          "password": "D@nielPass123"
        },
        {
          "name": "Olivia Lee",
          "email": "olivia.lee@example.com",
          "username": "olivia_l",
          "password": "L33Olivia"
        },
        {
          "name": "William Turner",
          "email": "william.turner@example.com",
          "username": "will_turner",
          "password": "W!lliamPassw0rd"
        },
        {
          "name": "Ava Martinez",
          "email": "ava.martinez@example.com",
          "username": "ava_m",
          "password": "Martinez123@"
        }
      ]
      
  ];
  
  const authenticateUser = (username, password) => {
    const user = studentsData.find((student) => student.username === username && student.password === password);
    return user;
  };
  
  export default authenticateUser;
  