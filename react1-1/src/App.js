import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import MainPage from './MainPage';
import MyButton from './MyButton';




function App() {
  return (
    <div className="App">
      <LoginControl />
      <Toggle />
      <MainPage />
      <MyButton />
    </div>
  );
}

export default App;
