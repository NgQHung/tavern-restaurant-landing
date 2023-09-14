import './App.css';
import Main from './components/Pages/Main';
import Cart from './components/UI/Cart';
import {useSelector} from 'react-redux/es/exports';
import {Route, Routes, Navigate} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

// import { Switch } from "react-router-dom";
import {ToastContainer} from 'react-toastify';

function App() {
    const user = useSelector((state) => state.authSlice.user);
    // const navigate = useNavigate()
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={
                        // <Main />
                        // user &&
                        <Main />
                        // : <Navigate to="/login" />
                    }
                />
                <Route path="/login" element={<Cart />} />
                <Route path="/signup" element={<Cart />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
