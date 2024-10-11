import logo from './logo.svg';
import './App.css';
import Toggle from './Toggle';
import LoginControl from './LoginControl';
import MainPage from './MainPage';
import MyButton from './MyButton';
import ToolBar from './ToolBar';
import LandingPage from './LandingPage';
import NumberList from './NumberList';
import AttendanceBook from './AttendanceBook';
import SignUp from './signup';
import Card from './Card';
import ProfileCard from './ProfileCard';




function App() {
  return (
    <div className="App">
      {<LandingPage/>}
      { <NumberList/> }
      {<AttendanceBook/> }
      <SignUp/>
      <Card/>
      <ProfileCard/>
    </div>
  );
}

export default App;
