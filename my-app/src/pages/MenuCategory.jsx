import { useParams, Link } from "react-router-dom";
import { CATEGORIES } from "../data/menu";

export default function MenuCategory() {
    const { slug } = useParams();
    const cat = CATEGORIES.find(c => c.slug === slug);

    if (!cat) {
        return (
            <main className="section">
                <div className="container">
                    <h1>メニューが見つかりません</h1>
                    <p><Link to="/menu" className="btn-ghost">メニュー一覧へ</Link></p>
                </div>
            </main>
        );
    }

    return (
        <main className="section">
            <div className="container">
                <p><Link to="/menu" className="btn-ghost">← メニュー一覧</Link></p>
                <h1 style={{ marginTop: 8 }}>{cat.title}</h1>
                <div className="menu-grid" style={{ marginTop: 16 }}>
                    <div className="menu-card">
                        <ul>
                            {cat.items.map(i => (
                                <li key={i.name} style={{ margin: "10px 0" }}>
                                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                                        <strong>{i.name}</strong>
                                        <span className="price">¥{i.price.toLocaleString()}</span>
                                    </div>
                                    <div style={{ color: "#a7a7a7", fontSize: 14 }}>{i.desc ?? ""}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="note" style={{ marginTop: 12 }}>※ 表示は税込/税抜の別を決めて表記</p>
            </div>
        </main>
    );
}
