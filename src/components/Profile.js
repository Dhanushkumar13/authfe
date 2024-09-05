import { useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { state, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, [loadUser]);

  if (!state.user) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {state.user.name}</h1>
      <p>Email: {state.user.email}</p>
    </div>
  );
};

export default Profile;
