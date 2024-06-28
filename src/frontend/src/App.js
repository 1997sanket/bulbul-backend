import { Outlet, BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer';
import { Home } from './components/pages/Home';
import { Login } from './components/pages/Login';
import { Nav } from './components/Nav';
import { Registration } from './components/pages/Registration';
import Peep from './components/pages/Peep';
import Peeps from './components/pages/Peeps';
import Profile from './components/pages/Profile';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="register" element={<Registration />} />
                        <Route path="login" element={<Login />} />
                        <Route path="peep" element={<Peep />} />
                        <Route path="peeps" element={<Peeps />} />
                        <Route path="profile" element={<Profile />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const Layout = () => {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default App;
