import { Routes, Route } from "react-router-dom"
import { RegisterRoutes } from "../Pages/Register"
import { CustomerClient } from "../Pages/Information"


export const AppRouter = () =>{
    return (
        <Routes>
            {/* Register */}
            <Route path="/register/*" element={ <RegisterRoutes/>}/>
            {/* Table */}
            <Route path="/information/*" element={ <CustomerClient/>}/>
            <Route path="/*" element={ <RegisterRoutes/>}/>
        </Routes>
    )
}