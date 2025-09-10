import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <h1 className="hero__title">
          川口バーへようこそ
        </h1>
        <p className="hero__subtitle">
          こだわりのお酒と美味しい料理で、特別なひとときをお過ごしください。
          川口で愛され続けている老舗バーです。
        </p>
        <a href="/menu" className="hero__cta-button">
          メニューを見る
        </a>
        
        <div className="hero__scroll-indicator">
          ↓
        </div>
      </div>
    </section>
  );
};

export default Hero;