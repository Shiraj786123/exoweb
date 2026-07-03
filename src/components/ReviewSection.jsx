import React from 'react';
import { clientAvatarAlt } from '../lib/imageAlt';
import CountUp from 'react-countup';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Our e-commerce platform transformed our business. The team's expertise in custom web solutions helped us scale faster and reach a global audience.",
      name: "Sarah Thompson",
      username: "@sarah_thompson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      text: "The mobile app they developed for us has been a game-changer. It's fast, intuitive, and perfectly aligned with our brand vision. Highly recommend!",
      name: "David Martinez",
      username: "@david_martinez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      text: "Excellent IT resource outsourcing service. They provided highly skilled developers who integrated seamlessly with our team.",
      name: "Vexoweb",
      username: "@vexoweb",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    }
  ];

  // Uniform SVG Star for reliable cross-platform rendering
  const StarIcon = ({ className }) => (
    <svg 
      className={className} 
      width="18" 
      height="18" 
      viewBox="0 0 24 24" 
      fill="#f59e0b" 
      stroke="#f59e0b" 
      strokeWidth="1"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        
        {/* Centered Top Header */}
        <div className="reviews-header">
          <span className="reviews-subheading">Testimonials</span>
          <h2 className="reviews-heading">Our Customers Love Us</h2>
          <p className="reviews-lead-text">
            See how our custom software solutions, website development, and digital strategies empower businesses globally.
          </p>
        </div>

        {/* 4-Column Layout Grid (Rating Card + 3 Review Cards) */}
        <div className="reviews-grid">
          
          {/* Rating Summary Card */}
          <div className="rating-summary-card">
            <div className="rating-score-wrapper">
              <span className="rating-number">
                <CountUp end={4.9} decimals={1} duration={1.5} />
              </span>
              <span className="rating-max">/5</span>
            </div>
            
            <div className="rating-stars-large">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="star-large" />
              ))}
            </div>

            <div className="rating-count-badge">
              <p className="rating-count-text">
                Over <span className="highlight-blue"><CountUp end={150} duration={2} />+</span> Verified Reviews
              </p>
              <p className="rating-source">Clutch &amp; Google Partner Network</p>
            </div>
          </div>

          {/* Testimonial Cards */}
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="card-top-accent" />
              <div className="quote-badge">“</div>
              
              <div className="review-stars">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="star-small" />
                ))}
              </div>

              <p className="review-text">{review.text}</p>

              <div className="reviewer-profile">
                <img 
                  src={review.avatar} 
                  alt={clientAvatarAlt(review.name, review.username)}
                  className="reviewer-avatar" 
                  loading="lazy" 
                />
                <div className="reviewer-details">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="reviewer-username">{review.username}</span>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;