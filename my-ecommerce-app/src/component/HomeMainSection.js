import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reviews from '../data/reviews';

const HomeMainSection = () => {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const shuffleAndPick = (array, num) => {
      const shuffled = [...array].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, num);
    };

    setSelectedReviews(shuffleAndPick(reviews, 2));
  }, []);

  return (
    <main>
      <section>
        <h2>About Us</h2>
        <p>Our mission and vision...</p>
        <Link to="/products"><button>Shop Now</button></Link>
      </section>
      <section>
        <h2>Customer Reviews</h2>
        {selectedReviews.map((review, index) => (
          <div key={index}>
            <h3>{review.customerName}</h3>
            <p>{review.reviewContent}</p>
            <p>{'★'.repeat(review.stars)}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomeMainSection;