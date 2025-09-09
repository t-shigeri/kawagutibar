import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Gallery from "../components/Gallery.jsx";
import Access from "../components/Access.jsx";
import Reserve from "../components/Reserve.jsx";

export default function Home() {
    return (
        <main>
            <Hero />
            <About />
            <Gallery />
            <Access />
            <Reserve />
        </main>
    );
}
