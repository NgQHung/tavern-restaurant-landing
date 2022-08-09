import "./App.css";
import Footer from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import About from "./components/Pages/About";
import Cta from "./components/Pages/Cta";
import Main from "./components/Pages/Main";
import Menu from "./components/Pages/Menu";
import Testimonial from "./components/Pages/Testimonial";
import Cart from "./components/UI/Cart";
import { useSelector } from "react-redux/es/exports";

function App() {
    const isSignupOpen = useSelector((state) => state.actionsSlice.isSignupOpen);
    const isLoginOpen = useSelector((state) => state.actionsSlice.isLoginOpen);
    const cartContent = useSelector((state) => state.actionsSlice.cartContent);
    return (
        <div className="App">
            <Header />
            <Main />
            <About />
            <Menu />
            <Testimonial />
            <Cta />
            <Footer />
            {isSignupOpen && (
                <Cart
                    cartContent={cartContent}
                    isLoginOpen={isLoginOpen}
                    isSignupOpen={isSignupOpen}
                />
            )}
            {isLoginOpen && (
                <Cart
                    cartContent={cartContent}
                    isLoginOpen={isLoginOpen}
                    isSignupOpen={isSignupOpen}
                />
            )}
        </div>
    );
}

export default App;
