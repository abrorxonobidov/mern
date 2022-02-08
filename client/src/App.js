import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
