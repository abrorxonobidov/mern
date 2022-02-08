import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                        <Routes>
                            <Route path="/" exact element={<Main/>}/>
                            <Route path="/add" element={<AddBook/>}/>
                            <Route path="/update/:id" element={<UpdateBook/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
