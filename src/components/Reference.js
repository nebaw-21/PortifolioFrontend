import Carousel from 'react-bootstrap/Carousel';
import '../style/reference.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import React, { useState, useEffect } from 'react';
import axios from 'axios';
AOS.init();



function Reference() {

  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:8000/api/displayTestimonial');
        const result = response.data;
        setTestimonials(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);





  
  const CustomArrow = ({ direction, onClick }) => (
    <button className={`custom-arrow custom-${direction}  `} onClick={onClick}>
      {direction === 'prev' ? (
        <FaChevronLeft /> // Font Awesome icon for previous
      ) : (
        <FaChevronRight /> // Font Awesome icon for next
      )}
    </button>
  );

  const CustomIndicator = ({ onClick, isActive }) => (
    <button
      className={`custom-indicator ${isActive ? 'active' : ''}`}
      onClick={onClick}
    />
  );

  return (

    <div id='reference'  data-aos="fade-up"
    data-aos-anchor-placement="top-bottom">
    
    <Carousel
      nextIcon={<CustomArrow direction="next" />}
      prevIcon={<CustomArrow direction="prev" />}
      nextLabel=""
      prevLabel=""
      indicators={testimonials.length > 1}
      renderIndicator={(index, onClick, isActive) => (
        <CustomIndicator key={index} onClick={onClick} isActive={isActive} />
      )}
    >
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="testimonial-slide  shadow-lg p-3 mb-5 bg-body-tertiary rounded">
            <img
            src={"http://localhost:8000/" + testimonial.image}
              alt={`Testimonial ${index + 1}`}
              className="testimonial-image"
            />
            <blockquote className="blockquote text-center">
              <p className="mb-0 quote">{testimonial.description}</p>
              <footer className="blockquote-footer">{testimonial.name}</footer>
            </blockquote>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
    </div>

  );
}

export default Reference;