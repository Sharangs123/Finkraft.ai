import React, { useState } from 'react';
import Login from './LoginComponent';
const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <Login setUser={setUser} />
    </div>
  );
};

export default App;
