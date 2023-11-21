
//   // Initial data
// let userData = [
//     { id: 1, username: 'user1', password: 'password1', active_module: true, role: 'user' },
//     { id: 2,username: 'user2', password: 'password2', active_module: false, role: 'user' },
//     { id: 3,username: 'admin', password: 'admin123', active_module: true, role: 'admin' }
//     // Add more initial data as needed
//   ];
  
//   // Function to fetch user data
//   export const getUserData = () => {
//     return userData;
//   };
  
//   // Function to add a new user
//   export const addUser = (newUser) => {
//     userData = [...userData, newUser];
//   };
  
//   // Function to update user data
//   export const updateUser = (userId, updatedUserData) => {
//     userData = userData.map((user) =>
//       user.id === userId ? { ...user, ...updatedUserData } : user
//     );
//   };



  import React, { createContext, useState } from 'react';

  // Create context
  export const UserContext = createContext();
  
  // Create a provider component
  export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState([
      // Initial user data if needed
      { id: 1, username: 'user1', password: 'password1', active_module: true, role: 'user' },
        { id: 2,username: 'user2', password: 'password2', active_module: false, role: 'user' },
        { id: 3,username: 'admin', password: 'admin123', active_module: true, role: 'admin' }
    ]);
  
    // Function to update user data
    const updateUser = (newUserData) => {
      setUserData(newUserData);
    };
  
    return (
      <UserContext.Provider value={{ userData, updateUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  