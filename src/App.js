
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./Home/Home";
import Details from "./Details/Details";


function Error() {
    return (
        <div>
            Sorry, page doesnt found
        </div>
    )
}

function App() {
  return (
      <>
    <Routes>

      <Route path="/" element={<Home/>}/>
      <Route path='details/:id' element={<Details/>}/>
        <Route path='*' element={<Error/>}/>
    </Routes>
      </>
  );
}

export default App;
