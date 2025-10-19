import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Testimonials.css';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await axios.get('/api/testimonials');
      setTestimonials(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      // Fallback to default testimonials if API fails
      setTestimonials([
        {
          _id: '1',
          text: 'SAAZ made applying to university so much easier! The admission dates and guidelines were a lifesaver. Highly recommend!',
          author: 'Fatima K.',
          rating: 5
        },
        {
          _id: '2',
          text: 'The AI mentor feature really helped me understand my options and plan my future. I feel so much more confident now!',
          author: 'Ahmed R.',
          rating: 5
        },
        {
          _id: '3',
          text: 'Connecting with other students and tutors through SAAZ has been invaluable. Truly a supportive and inspiring community.',
          author: 'Zara B.',
          rating: 5
        }
      ]);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="reviews-section">
        <h2>What Our Students Say</h2>
        <div className="loading">Loading testimonials...</div>
      </section>
    );
  }

  return (
    <section className="reviews-section">
      <h2>What Our Students Say</h2>
      <div className="satisfaction-banner">
        <div className="stat-item">
          <span className="stat-number">98%</span>
          <span className="stat-label">Customer Satisfaction</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10,000+</span>
          <span className="stat-label">Happy Students</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Universities</span>
        </div>
      </div>
      <div className="review-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="review-card">
            <div className="stars">
              {[...Array(testimonial.rating || 5)].map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
            <p>"{testimonial.text}"</p>
            {testimonial.author && <h4>- {testimonial.author}</h4>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
