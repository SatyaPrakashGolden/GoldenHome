import { BrowserRouter } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from "./context/authContext";
import MyAdmin from './admin/MyAdmin';
import Client from './client/Client';
import Login from './common/login/Login';


const App = () => {
  const { currentUser, isAdmin } = useContext(AuthContext);

  console.log("app isAdmin  " + isAdmin );
  const Layout = ({ children }) => (
    <div className="">
      {/* Add common layout components if needed */}
      <div >
        {children}
      </div>
    </div>
  );

  const renderComponent = () => {
    if (!currentUser) {
      return <Login />;
    } else if (isAdmin) { 
      return <Layout><MyAdmin /></Layout>;
    } else {
      return <Layout><Client /></Layout>;
    }
  };
  

  return (
    <BrowserRouter>
      {renderComponent()}
    </BrowserRouter>
  );
};

export default App;
