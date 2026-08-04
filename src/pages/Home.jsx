import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Features from "../components/Features";
import Certificates from "../components/Certificates";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import QuoteForm from "../components/QuoteForm";

function Home() {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Products />
            <Features />
            <Certificates />
            <Gallery />
            <Contact />
            <QuoteForm />

        </>
    );
}

export default Home;