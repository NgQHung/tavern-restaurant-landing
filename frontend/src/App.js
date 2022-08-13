import "./App.css";
import Main from "./components/Pages/Main";
import Cart from "./components/UI/Cart";
import { useSelector } from "react-redux/es/exports";
import { Route, Routes, Navigate } from "react-router-dom";
// import { Switch } from "react-router-dom";

function App() {
    const user = useSelector((state) => state.authSlice.user);
    // const navigate = useNavigate()
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={user ? <Main /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Cart />} />
                <Route path="/signup" element={<Cart />} />
            </Routes>
        </div>
    );
}

export default App;
