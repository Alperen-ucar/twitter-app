import './App.scss';
import Left from './components/left/Left';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Notifications from './components/pages/Notifications';
import Messages from './components/pages/Messages';
import Bookmarks from './components/pages/Bookmarks';
import List from './components/pages/List';
import Profile from './components/pages/Profile';
import Right from './components/right/Right';



function App() {
  return (
    <BrowserRouter>
       <div className="App">
          <Left />
          <div className='content'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='explore' element={<Explore />} />
              <Route path='notifications' element={<Notifications />} />
              <Route path='messages' element={<Messages />} />
              <Route path='bookmarks' element={<Bookmarks />} />
              <Route path='list' element={<List />} />
              <Route path='profile' element={<Profile />} />
            </Routes>
          </div>
          <Right />
       </div>
    </BrowserRouter>
   
  );
}

export default App;
