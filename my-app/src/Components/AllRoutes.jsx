import {Routes,Route} from "react-router-dom"
import Fitness from "../Pages/Fitness";
import Care from "../Pages/Care";
import Mind from "../Pages/Mind";
import Store from "../Pages/Store";
function AllRoutes(){
    return <Routes>
            <Route path="/fitness" element={<Fitness/>}/>
            <Route path="/care" element={<Care/>}/>
            <Route path="/mind" element={<Mind/>}/>
            <Route path="/store" element={<Store/>}/>
        </Routes>
    
}
export default AllRoutes;