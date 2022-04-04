import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Blogs from './Components/Blogs/Blogs';
import DashBoard from './Components/DashBoard/DashBoard';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
    <Header></Header>
      <Routes>
        <Route path='/' element={<Header></Header>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/dashBoard' element={<DashBoard></DashBoard>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>2S
      </Routes>
    </div>
  );
}

export default App;
