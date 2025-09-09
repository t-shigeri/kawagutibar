import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/menu";

export default function MenuIndex() {
    return (
        <main className="section">
            <div className="container">
                <h1 style={{ marginTop: 0 }}>メニュー</h1>
                <p className="note">価格・内容は仕入れにより変わる場合があります。</p>

                <div className="menu-grid" style={{ marginTop: 16 }}>
                    {CATEGORIES.map(cat => (
                        <Link key={cat.slug} to={`/menu/${cat.slug}`} className="card" style={{ textDecoration: "none" }}>
                            <h3 style={{ marginBottom: 4 }}>{cat.title}</h3>
                            <p style={{ color: "#a7a7a7" }}>{cat.description}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
