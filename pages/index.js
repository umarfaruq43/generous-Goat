import { Box } from "@chakra-ui/react";
import About from "../components/About";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Nav from "../components/Navbar";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
export default function Home() {
    return (
        <Box bgColor="brand.primary" minH="100vh" style={{ zindex: -2 }}>
            <Nav />
            <Hero />
            <Gallery />
            <About />
            <Roadmap />
            <Team />
            <Faq />
            <Footer />
        </Box>
    );
}
