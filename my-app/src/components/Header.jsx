import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const [open, setOpen] = useState(false);
    const nav = useNavigate();
    const go = (id) => {
        // ホームのセクションにスクロールしたい場合はホームに戻してから処理
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
        <header className="kb-header">
            <div className="kb-header__bar container">
                <button className="kb-logo" onClick={() => nav("/")}>川口バル</button>

                <nav className="kb-nav kb-nav--desktop">
                    <button className="btn-reset" onClick={() => go("about")}>お店紹介</button>
                    <Link to="/menu">メニュー</Link>
                    <button className="btn-reset" onClick={() => go("gallery")}>ギャラリー</button>
                    <button className="btn-reset" onClick={() => go("access")}>アクセス</button>
                    <button className="btn-primary btn-reset" onClick={() => go("reserve")}>予約</button>
                </nav>

                <button aria-label="メニュー"
                    className={`kb-hamburger kb-nav--mobile ${open ? "is-open" : ""}`}
                    onClick={() => setOpen(v => !v)}
                ><span /><span /><span /></button>
            </div>

            <div className={`kb-drawer ${open ? "show" : ""}`}>
                <button className="btn-reset" onClick={() => go("about")}>お店紹介</button>
                <Link to="/menu" onClick={() => setOpen(false)}>メニュー</Link>
                <button className="btn-reset" onClick={() => go("gallery")}>ギャラリー</button>
                <button className="btn-reset" onClick={() => go("access")}>アクセス</button>
                <button className="btn-primary btn-reset" onClick={() => go("reserve")}>予約</button>
            </div>
        </header>
    );
}
