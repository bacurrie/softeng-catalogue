import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionIndex from "./pages/CollectionIndex";
import DetailPage from "./pages/DetailPage";
import Navi from "./components/Navi";
import Data from "./data/data.json";
import Debug from './pages/Debug';

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
            <CollectionIndex/>
          </Route>

          <Route path='/login'>
            <p>login</p>
          </Route>

          <Route path='/detail'>
            <DetailPage/>
          </Route>

          <Route path='/debug'>
            <Debug/>
          </Route>
          
          {Data.map(data => (
            <Route path={data.id}><DetailPage data={data}/></Route>
          ))}

        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
