import React,{AuthProvider} from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    navigate('/Login', { state: { from: location } });
    return null;
  }

  return <Component {...rest} />;
};

const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/how-to" element={<HowTo />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
