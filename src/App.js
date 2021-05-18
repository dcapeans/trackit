  
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import Habits from "./Components/Habits";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/cadastro" exact>
                    <SignUp />
                </Route>
                <Route path="/habitos" exact>
                    <Habits />
                </Route>
            </Switch>
        </BrowserRouter>
        
    )
}