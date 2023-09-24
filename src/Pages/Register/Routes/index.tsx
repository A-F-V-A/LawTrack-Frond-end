import { Routes, Route, Navigate } from 'react-router-dom'
import { CustomerRegister, CustomerSupport } from '../Pages'

export const RegisterRoutes = () =>{
    return (
        <Routes>
            <Route path='customer' element={<CustomerRegister/>}/>
            <Route path='customer/support' element={<CustomerSupport/>}/>
            <Route path='/*' element={ <Navigate to="/register/customer"/>}/>
        </Routes>
    )
}