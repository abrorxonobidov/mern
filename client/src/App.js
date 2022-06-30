import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AddBook from "./pages/AddBook";
import UpdateBook from "./pages/UpdateBook";
import ViewBook from "./pages/ViewBook";
import Functions from "./components/Functions";

function App() {

    let arr = [
        100, 15,98,12,25, 68, 68,11,75,16, 0, 100
    ];

    console.log(arr)
    console.log(Functions.bubbleSort(arr))

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="offset-lg-2 col-lg-8">
                        <Routes>
                            <Route path="/" exact element={<Main/>}/>
                            <Route path="/:id" element={<ViewBook/>}/>
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
