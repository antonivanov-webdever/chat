import './App.css'
import {Routes, BrowserRouter, Route} from "react-router-dom";
import Chat from "./pages/Chat";
import Login from "./pages/Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Chat/>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
