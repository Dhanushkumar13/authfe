import { createContext, useReducer } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      return { ...state, isAuthenticated: true, token: action.payload.token };
    case 'LOAD_USER':
      return { ...state, user: action.payload, isAuthenticated: true };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return { token: null, isAuthenticated: false, user: null };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const register = async (userData) => {
    const res = await axios.post('/api/register', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  };

  const login = async (userData) => {
    const res = await axios.post('/api/login', userData);
    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
  };

  const loadUser = async () => {
    const res = await axios.get('/api/profile', { headers: { 'x-auth-token': state.token } });
    dispatch({ type: 'LOAD_USER', payload: res.data });
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  return (
    <AuthContext.Provider value={{ state, register, login, loadUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
