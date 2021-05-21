  
import {
    BrowserRouter,
    Switch,
    Route
  } from "react-router-dom";
import { useState } from "react"
import Habits from "./Components/Habits";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Today from "./Components/Today";
import UserContext from "./Context/UserContext";
import History from "./Components/History";
import TodayHabitsContext from "./Context/TodayHabitsContext";
import GlobalStyle from "./styles/GlobalStyles";
import ClickedDayHabits from "./Components/ClickedDayHabits";

export default function App() {
    const [user, setUser] = useState(null)
    const [todayHabits, setTodayHabits] = useState([])
    const [dayHabits, setDayHabits] = useState(null)
    
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Switch>
                <UserContext.Provider value={{user, setUser}}>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/cadastro" exact>
                        <SignUp />
                    </Route>
                    <TodayHabitsContext.Provider value={{todayHabits, setTodayHabits}}>
                        <Route path="/habitos" exact>
                            <Habits />
                        </Route>
                        <Route path="/hoje" exact>
                            <Today />
                        </Route>
                        <Route path="/historico" exact>
                            <History setDayHabits={setDayHabits}/>
                        </Route>
                        <Route path="/dia" exact>
                            <ClickedDayHabits dayHabits={dayHabits}/>
                        </Route>
                    </TodayHabitsContext.Provider>
                </UserContext.Provider>
            </Switch>
        </BrowserRouter> 
    )
}