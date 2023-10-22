import './App.css';
import {Switch, Route} from "react-router-dom"
import landing from './components/Landing/landingpage';
import Form from './components/Form/form';
import notfound from "./components/NotFound/notfound"
import home from "./components/Home/home"
function App() {
  return (
   <Switch>
    <Route exact path ="/" component={landing}/>
    <Route  path ="/form" component={Form}/>
    <Route  path ="/home" component={home}/>
    <Route  path ="*" component={notfound}/>
    <Route  path ="/" component={landing}/>
   </Switch>
  );
}

export default App;
