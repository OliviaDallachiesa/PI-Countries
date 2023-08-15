import Landing from './views/Landing/Landing';
import Create from './views/Create/Create';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
        <Route exact path= "/" element={<Landing/>}/>
        <Route exact path= "/create" element={<Create/>}/>
        <Route exact path= "/detail" element={<Detail/>}/>
        <Route path= "/home" element={<Home/>}/>
      </Routes>
    </div>
    )
}

/* <Routes>
    <Route exact path= "/" component={<Landing/>}/>
    <Route exact path= "/create" element={<Create/>}/>
    <Route exact path= "/detail" element={<Detail/>}/>
    <Route path= "/home" element={<Home/>}/>
    </Routes> */

export default App
