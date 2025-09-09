import { Link } from "react-router-dom";
export default function NotFound() {
    return (
        <main className="section">
            <div className="container">
                <h1>ページが見つかりません</h1>
                <p><Link to="/" className="btn-ghost">ホームへ</Link></p>
            </div>
        </main>
    );
}
