import Navbar from "./comp/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Userform from "./comp/Userform"
import Alldetails from "./comp/Alldetails"
import Alter from "./comp/Alter"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Navbar></Navbar>
             <Routes>
              <Route element={<Userform/>} path="/"/>
              <Route element={<Alldetails/>} path="/all"/>
              <Route element={<Alter/>} path="/alter/:ddd"/>
             </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App