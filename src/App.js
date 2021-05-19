  
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import { useState} from "react"
import Habits from "./Components/Habits";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Today from "./Components/Today";
import UserContext from "./Context/UserContext";

export default function App() {
    const [user, setUser] = useState(null)
    
    return (
        <BrowserRouter>
            <Switch>
                <UserContext.Provider value={{user, setUser}}>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cadastro" exact>
                        <SignUp />
                    </Route>
                    <Route path="/habitos" exact>
                        <Habits />
                    </Route>
                    <Route path="/hoje" exact>
                        <Today />
                    </Route>
                </UserContext.Provider>
            </Switch>
        </BrowserRouter>
        
    )
}