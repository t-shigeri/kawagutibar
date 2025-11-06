// src/components/Header.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const location = useLocation();

    const go = (id) => {
        if (location.pathname !== "/") nav("/", { replace: false });
        setTimeout(() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
        setOpen(false);
    };

    useEffect(() => {
        const onScroll = () => setOpen(false);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header className={`kb-header ${open ? "is-open" : ""}`}>
            <div className="kb-header__bar container">
                <button className="kb-logo" onClick={() => { setOpen(false); nav("/"); }}>
                    川口バル
                </button>

                {/* 単一ナビ：PCは横並び、SPはドロワーとして開閉 */}
                <nav className="kb-menu" role="navigation" aria-label="メインナビ">
                    <button className="btn-reset" onClick={() => go("about")}>お店紹介</button>
                    <Link to="/menu" onClick={() => setOpen(false)}>メニュー</Link>
                    <button className="btn-reset" onClick={() => go("gallery")}>ギャラリー</button>
                    <button className="btn-reset" onClick={() => go("access")}>アクセス</button>
                    <button className="btn-primary btn-reset" onClick={() => go("reserve")}>予約</button>
                </nav>

                <button
                    aria-label="メニュー"
                    aria-expanded={open}
                    aria-controls="kb-menu"
                    className={`kb-hamburger ${open ? "is-open" : ""}`}
                    onClick={() => setOpen(v => !v)}
                >
                    <span /><span /><span />
                </button>
            </div>
        </header>
    );
}
