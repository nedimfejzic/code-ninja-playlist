import { Header } from "./components/Header.js";
import { Home } from "./components/Home";
import { Create } from "./components/Create";
import { ErrorPage } from "./components/ErrorPage";
import { BlogDetails } from "./components/BlogDetails";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 

function App() {

  return (
    <Router>
      <div className="container mx-auto ">
        <Header></Header>
        <Switch>
          <Route exact path='/'><Home/></Route>
          <Route exact path='/create'><Create/></Route>
          <Route  path='/blogs/:id'><BlogDetails/></Route>
          <Route><ErrorPage/></Route>
        </Switch>
      
      </div>
    </Router>

  );
}

export default App;
