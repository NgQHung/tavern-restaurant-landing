import "./App.css";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import About from "./components/Pages/About";
import Cta from "./components/Pages/Cta";
import Main from "./components/Pages/Main";
import Menu from "./components/Pages/Menu";
import Testimonial from "./components/Pages/Testimonial";

function App() {
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Menu />
            <Testimonial />
            <Cta />
            <Footer />
        </div>
    );
}

export default App;
