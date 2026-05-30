import React from 'react';
import CountUp from 'react-countup';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      text: "Our e-commerce platform transformed our business. The team's expertise in custom web solutions helped us scale faster and reach a global audience.",
      name: "Sarah Thompson",
      username: "@sarah_thompson",
      bgColor: "#ffe4e1"
    },
    {
      id: 2,
      text: "The mobile app they developed for us has been a game-changer. It's fast, intuitive, and perfectly aligned with our brand vision. Highly recommend!",
      name: "David Martinez",
      username: "@david_martinez",
      bgColor: "#e8f5e9"
    },
    {
      id: 3,
      text: "Excellent IT resource outsourcing service. They provided highly skilled developers who integrated seamlessly with our team.",
      name: "zonzoc",
      username: "@zonzoc",
      bgColor: "#b2ebf2"
    }
  ];

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        
        {/* Left Side - Rating */}
        <div className="reviews-left">
          <div className="rating-display">
            <h1 className="rating-number">4.9</h1>
            <div className="rating-stars-large">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="star-icon">⭐</span>
              ))}
            </div>
          </div>
          
        </div>

        {/* Right Side - Header & Cards */}
        <div className="reviews-right">
          <h2 className="reviews-heading">
            Our<br />
            Customers<br />
            love us
          </h2>

          {/* Review Cards */}
          <div className="review-cards-grid">
            {reviews.map((review) => (
              <div 
                key={review.id} 
                className="review-card"
                style={{ backgroundColor: review.bgColor }}
              >
                <div className="quote-icon">"</div>
                
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>

                <p className="review-text">{review.text}</p>

                <div className="reviewer-info">
                  <p className="reviewer-name">{review.name}</p>
                  <p className="reviewer-username">{review.username}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
