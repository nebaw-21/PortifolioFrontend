import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import About_add from './components/admin/About/About_add';
import About_display from './components/admin/About/About_display';
import About_edit from './components/admin/About/About_edit';

import Education_add from './components/admin/Education/Education_add';
import Education_display from './components/admin/Education/Education_display';
import Education_edit from './components/admin/Education/Education_edit';

import Experience_add from './components/admin/Experiance/Experience_add';
import Experience_display from './components/admin/Experiance/Experience_display';
import Experience_edit from './components/admin/Experiance/Experience_edit';

import Link_add from './components/admin/Link/Link_add';
import Link_display from './components/admin/Link/Link_display';
import Link_edit from './components/admin/Link/Link_edit';

import Testimonial_add from './components/admin/Testimonial/Testimonial_add';
import Testimonial_display from './components/admin/Testimonial/Testimonial_display';
import Testimonial_edit from './components/admin/Testimonial/Testimonial_edit';

import User_add from './components/admin/User/User_add';
import User_display from './components/admin/User/User_display';
import User_edit from './components/admin/User/User_edit';


import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about_add" element={<About_add />} />
        <Route path="/about_display" element={<About_display />} />
        <Route path="/about_edit/:id" element={<About_edit />} />

        <Route path="/education_add" element={<Education_add />} />
        <Route path="/education_display" element={<Education_display/>} />
        <Route path="/education_edit/:id" element={<Education_edit />} />

        <Route path="/experience_add" element={<Experience_add />} />
        <Route path="/experience_display" element={<Experience_display/>} />
        <Route path="/experience_edit/:id" element={<Experience_edit />} />
       
        <Route path="/link_add" element={<Link_add />} />
        <Route path="/link_display" element={<Link_display/>} />
        <Route path="/link_edit/:id" element={<Link_edit />} />

        <Route path="/testimonial_add" element={<Testimonial_add />} />
        <Route path="/testimonial_display" element={<Testimonial_display/>} />
        <Route path="/testimonial_edit/:id" element={<Testimonial_edit />} />

        <Route path="/user_add" element={<User_add/>} />
        <Route path="/user_display" element={<User_display/>} />
        <Route path="/user_edit/:id" element={<User_edit/>} />




      </Routes>
    </BrowserRouter>

  );
}

export default App;
