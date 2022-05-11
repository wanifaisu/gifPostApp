import Home from './pages/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import User from './pages/userProfile/User';
import Login from './pages/login/Login';
import Forgot from './pages/forget/Forget';
import Blog from './pages/blog/Blog';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import LandingPage from './pages/LandingPage/LandingPage';
import GifSearchApp from './pages/gifSearchApp/GifSearchApp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          {/* <Route path="/home" element={<Home />} /> */}
          {/* <Route path="/user" element={<User />} /> */}
          {/* <Route path="/login" element={<Login />} /> */}
          {/* <Route path="/forget" element={<Forgot />} /> */}
          {/* <Route path="/" element={<Blog />} /> */}
          {/* <Route path="/" element={<Contact />} /> */}
          <Route path="/" element={<GifSearchApp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
