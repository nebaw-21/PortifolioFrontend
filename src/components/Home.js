import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Reference from "./Reference";
import Education from "./Education";
import Experience from "./Experience";
import { Link } from "react-router-dom";
import '../App.css';


function Home() {

  return (
<body className="main">

<Header />

<About />
<Education />
<Experience />

<Reference />
<Contact/>

<Footer />



</body>




  );
}

export default Home;