import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          川口バー
        </a>
        
        <nav className="header__nav">
          <a href="/" className="header__nav-link">ホーム</a>
          <a href="/menu" className="header__nav-link">メニュー</a>
          <a href="/about" className="header__nav-link">店について</a>
          <a href="/access" className="header__nav-link">アクセス</a>
          <a href="/reserve" className="header__nav-link">予約</a>
        </nav>

        <button 
          className="header__menu-toggle"
          onClick={toggleMenu}
          aria-label="メニューを開く"
        >
          ☰
        </button>
      </div>
    </header>
  );
};

export default Header;