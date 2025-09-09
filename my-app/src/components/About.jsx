const About = () => (
    <section id="about" className="section">
        <div className="container two-col">
            <div>
                <h2>川口バルについて</h2>
                <p>
                    川口バルは、旬の素材を使った小皿料理と、自然派ワインを中心に厳選したドリンクをご用意する、平尾の小さなバルです。肩肘張らずに楽しめる心地よい時間をお届けします。
                </p>
                <ul className="badges">
                    <li>自然派ワイン</li>
                    <li>季節の小皿</li>
                    <li>平尾駅 徒歩◯分</li>
                </ul>
            </div>
            <img className="rounded" src="/assets/images/hero.jpg" alt="店内の雰囲気" />
        </div>
    </section>
);
export default About;
