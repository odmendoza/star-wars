import logo from './logo.svg';
import './App.css';

// Components

import Login from './components/Login';
import Films from './components/Films';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Login />
      <Profile />
      <Films />
    </div>
  );
}

export default App;
