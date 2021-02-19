import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navi from "./components/Navi";

function App() 
{
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navi/>
          
          <Route exact path='/'>
            <HomePage/>
          </Route>
          
          <Route path='/index'>
            <p>index</p>
          </Route>

          <Route path='/login'>
            <p>login</p>
          </Route>

          <Route path='/detail'>
            <p>detail</p>
          </Route>
          
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
