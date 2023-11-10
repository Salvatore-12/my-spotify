
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyFooter from './components/Myfooter';
import SpotifyMenu from './components/SpotifyMenu';
import MyBrani from './components/MyBrani';
import MyBrani2 from './components/MyBrani2';



function App() {
  return (
  <>
<SpotifyMenu/>
<MyBrani/>
<MyBrani2/>
  <MyFooter/>
  </>
  );
}

export default App;
