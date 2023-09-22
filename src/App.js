import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

import AboutAdd from './components/admin/About/AboutAdd';
import AboutDisplay from './components/admin/About/AboutDisplay';
import AboutEdit from './components/admin/About/AboutEdit';

import EducationAdd from './components/admin/Education/EducationAdd';
import EducationDisplay from './components/admin/Education/EducationDisplay';
import EducationEdit from './components/admin/Education/EducationEdit';

import ExperienceAdd from './components/admin/Experiance/ExperienceAdd';
import ExperienceDisplay from './components/admin/Experiance/ExperienceDisplay';
import ExperienceEdit from './components/admin/Experiance/ExperienceEdit';

import LinkAdd from './components/admin/Link/LinkAdd';
import LinkDisplay from './components/admin/Link/LinkDisplay';
import LinkEdit from './components/admin/Link/LinkEdit';

import TestimonialAdd from './components/admin/Testimonial/TestimonialAdd';
import TestimonialDisplay from './components/admin/Testimonial/TestimonialDisplay';
import TestimonialEdit from './components/admin/Testimonial/TestimonialEdit';

import UserAdd from './components/admin/User/UserAdd';
import UserDisplay from './components/admin/User/UserDisplay';
import UserEdit from './components/admin/User/UserEdit';


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

        <Route path="/about_add" element={<AboutAdd />} />
        <Route path="/about_display" element={<AboutDisplay />} />
        <Route path="/about_edit/:id" element={<AboutEdit />} />

        <Route path="/education_add" element={<EducationAdd />} />
        <Route path="/education_display" element={<EducationDisplay/>} />
        <Route path="/education_edit/:id" element={<EducationEdit />} />

        <Route path="/experience_add" element={<ExperienceAdd />} />
        <Route path="/experience_display" element={<ExperienceDisplay/>} />
        <Route path="/experience_edit/:id" element={<ExperienceEdit />} />
       
        <Route path="/link_add" element={<LinkAdd />} />
        <Route path="/link_display" element={<LinkDisplay/>} />
        <Route path="/link_edit/:id" element={<LinkEdit />} />

        <Route path="/testimonial_add" element={<TestimonialAdd />} />
        <Route path="/testimonial_display" element={<TestimonialDisplay/>} />
        <Route path="/testimonial_edit/:id" element={<TestimonialEdit />} />

        <Route path="/user_add" element={<UserAdd/>} />
        <Route path="/user_display" element={<UserDisplay/>} />
        <Route path="/user_edit/:id" element={<UserEdit/>} />




      </Routes>
    </BrowserRouter>

  );
}

export default App;
