import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Customer } from '../../../Model';
import { Table } from '../../../Components/Table';



export const CustomerClient = () =>{

    const [customer,setCustomer] =  useState<Customer[] | null>(null);
    const navigate = useNavigate()

    useEffect(() =>{
        fetch('https://localhost:7240/LawTrack/api/custumer')
        .then((response) => response.json()) // Aquí se convierte la respuesta a JSON
        .then(data => {

            const formatted = data.map(({ id, name, lastName, identificationCard, role }:Customer) => ({
                id,
                nombres: name,
                apellidos: lastName,
                identificacion: identificationCard,
                role: role.name,
                descripcion: role.description
              }))

            setCustomer(formatted)
        })
        .catch((error) => {
            console.error('Error al obtener los roles:', error)
        })
    },[])

    return (
        <div className='container w-100 h-100'>
            <div className='row'>
                <div className='container-actions col-12 mt-2 mb-2 p-0'>
                    <button 
                        type="submit"
                        className="btn btn btn-info"
                        onClick={ () => navigate('/register/customer')}
                    >
                            Register Customer
                    </button>
                </div>
                <div className='container-table rounded bg-light pt-1 pb-1 pl-2 pr-2 col-12 table-responsive-sm'>
                    <Table data={customer}/>
                </div>
            </div>


        </div>
    )
}