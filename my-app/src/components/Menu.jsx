import { MENU } from "../data/menu";

const Section = ({ title, items }) => (
    <div className="menu-card">
        <h3>{title}</h3>
        <ul>
            {items.map((i) => (
                <li key={i.name} style={{ margin: "8px 0" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                        <strong>{i.name}</strong>
                        <span className="price">¥{i.price.toLocaleString()}</span>
                    </div>
                    <div style={{ color: "#a7a7a7", fontSize: 14 }}>{i.desc ?? ""}</div>
                </li>
            ))}
        </ul>
    </div>
);

const Menu = () => (
    <section id="menu" className="section alt">
        <div className="container">
            <h2>メニュー</h2>
            <div className="menu-grid">
                <Section title="フード" items={MENU.foods} />
                <Section title="ドリンク" items={MENU.drinks} />
            </div>
            <p className="note">※ 仕入れ状況により価格・内容が変更になる場合があります。</p>
        </div>
    </section>
);

export default Menu;
