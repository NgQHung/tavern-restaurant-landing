import './App.css';
import Main from './components/Pages/Main';
import Cart from './components/UI/Cart';
import {Route, Routes} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';
// import {useEffect} from 'react';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Cart />} />
                <Route path="/signup" element={<Cart />} />
            </Routes>
            <ToastContainer />
        </div>
    );
}

export default App;
