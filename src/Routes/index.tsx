import { Routes, Route } from "react-router-dom"
import { RegisterRoutes } from "../Pages/Register"


export const AppRouter = () =>{
    return (
        <Routes>
            {/* Register */}
            <Route path="/register/*" element={ <RegisterRoutes/>}/>
            {/* Table */}
            <Route path="/*" element={ <RegisterRoutes/>}/>
        </Routes>
    )
}