const Reserve = () => (
    <section id="reserve" className="section">
        <div className="container">
            <h2>ご予約・お問い合わせ</h2>
            <p>少人数のご予約はお電話/Instagram DM/LINEで承ります。貸切やコースのご相談もお気軽に。</p>
            <div className="reserve-grid">
                <a className="card" href="tel:0000000000">
                    <h3>電話で予約</h3>
                    <p>18:00–24:00（営業時間内）</p>
                </a>
                <a className="card" href="#" target="_blank" rel="noopener">
                    <h3>Instagram DM</h3>
                    <p>@kawaguchi_bar（仮）</p>
                </a>
                <a className="card" href="#" target="_blank" rel="noopener">
                    <h3>LINE</h3>
                    <p>友だち追加してトークで予約</p>
                </a>
            </div>
        </div>
    </section>
);
export default Reserve;
