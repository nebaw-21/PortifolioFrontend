import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Dashboard() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-3">
            <Link to="/link_display" className="btn btn-primary btn-block mb-3">
              Social Media Link
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/about_display" className="btn btn-primary btn-block mb-3">
              About Me
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/education_display" className="btn btn-primary btn-block mb-3">
              Education
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/experience_display" className="btn btn-primary btn-block mb-3">
              Experience
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/testimonial_display" className="btn btn-primary btn-block mb-3">
              Testimonial
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/user_display" className="btn btn-primary btn-block mb-3">
              Manage User
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;