import {Switch, Route} from "react-router-dom";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import Bike from "./views/House/House";
import {isLogged} from "./services/LocalStorage";
import {useHistory} from "react-router";
import Wrapper from "./components/Wrapper";
import Submit from "./components/Submit"

function App() {
    const history = useHistory();
    let auth = () => {
        if (isLogged()) {
            history.push('/');
        } else {
            history.push('/login');
        }
    }
    auth();

    return (
        <Switch>
            <Route exact path="/login" component={Login}/>
            <Wrapper>
                <Route exact path="/house" component={Bike}/>
                <Route exact path="/success/:id" component={Submit}/>
                <Route exact path="/" component={Dashboard}/>
            </Wrapper>
        </Switch>
    )
}

export default App;
