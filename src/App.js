import {Switch, Route} from "react-router-dom";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Bike from "./views/Bike/Bike";

function App() {
    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/bike/:id" component={Bike}/>
            <Route exact path="/" component={Dashboard}/>
        </Switch>
    )
}

export default App;
