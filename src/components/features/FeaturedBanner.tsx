import { useState, useEffect, useCallback } from 'react';
import { promotions } from '../../data/promotions';

export default function FeaturedBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = useCallback(() => {
    setActiveIndex(i => (i + 1) % promotions.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const promo = promotions[activeIndex];

  return (
    <div className="featured-banner">
      <div className="featured-banner__slide" style={{ background: promo.bgColor }}>
        <div className="featured-banner__content">
          <h2 className="featured-banner__title">{promo.title}</h2>
          <p className="featured-banner__subtitle">{promo.subtitle}</p>
          <button className="featured-banner__cta">{promo.ctaText}</button>
        </div>
      </div>
      <div className="featured-banner__dots">
        {promotions.map((_, i) => (
          <button
            key={i}
            className={`featured-banner__dot ${i === activeIndex ? 'featured-banner__dot--active' : ''}`}
            onClick={() => setActiveIndex(i)}
          />
        ))}
      </div>
    </div>
  );
}
