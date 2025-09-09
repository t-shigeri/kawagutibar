import { useEffect } from "react";

const Footer = () => {
    useEffect(() => {
        const el = document.getElementById("year");
        if (el) el.textContent = String(new Date().getFullYear());
    }, []);
    return (
        <footer className="site-footer">
            <div className="container footer-inner">
                <small>© <span id="year"></span> 川口バル</small>
                <small className="policy">特定商取引法に基づく表記 / プライバシーポリシー</small>
            </div>
        </footer>
    );
};
export default Footer;
