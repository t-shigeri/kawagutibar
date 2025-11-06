const Access = () => (
    <section id="access" className="section alt">
        <div className="container two-col">
            <div>
                <h2>アクセス</h2>
                <p>
                    〒815-0041 福岡市中央区平尾2-3-6<br /> 西鉄平尾駅から徒歩◯分
                </p>
                <table className="hours">
                    <tbody>
                        <tr><th>営業時間</th><td>17:30–:03:00（L.O. ）</td></tr>
                        <tr><th>定休日</th><td>月曜（仮）</td></tr>
                        <tr><th>席数</th><td>カウンター◯席 / テーブル◯席</td></tr>
                        <tr><th>支払い</th><td>現金 / カード / QR</td></tr>
                    </tbody>
                </table>
                <div className="quick-links">
                    <a className="btn-ghost" href="tel:092-46-3875">電話する</a>
                    <a className="btn-ghost" href="https://maps.google.com/?q=平尾 川口バル" target="_blank" rel="noopener">Google Map</a>
                    <a className="btn-ghost" href="https://instagram.com/" target="_blank" rel="noopener">Instagram</a>
                </div>
            </div>
            <div className="map-embed">
                <iframe
                    src="https://maps.google.com/maps?q=福岡%20平尾&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                    title="map"
                ></iframe>
            </div>
        </div>
    </section>
);
export default Access;
