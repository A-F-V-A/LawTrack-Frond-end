import { useEffect, useState, ChangeEvent } from "react"
import { useNavigate } from 'react-router-dom';
import { Customer, Role } from "../../Model"
import { Form } from '../index.ts'
import { useForm } from "../../Hooks/useForm.ts";

export const Register = () =>{
    const navigate = useNavigate()
    const [selectedRole, setSelectedRole] = useState<Role | null>(null)
    const [roles, setRole] = useState<Role[]>()
    const { formState, onInputChange } = useForm({
            name:'',
            lastName:'',
            cedula:''
    })

    const { name, lastName, cedula } = formState

    useEffect(() => {
        fetch('https://localhost:7240/LawTrack/api/role')
        .then((response) => response.json()) // Aquí se convierte la respuesta a JSON
        .then(data => setRole(data))
        .catch((error) => {
            console.error('Error al obtener los roles:', error);
        })
    }, [])

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const roleId = event.target.value
        const selected = roles?.find(role => role.id === roleId)    
        setSelectedRole(selected || null)
      }

      const onHandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if(name.length < 1 || lastName.length < 1  || cedula.length < 1 || selectedRole === null ) return

        const newCustomer : Customer = {
            id:null,
            name,
            lastName,
            identificationCard: cedula,
            role:selectedRole
        }

        console.log(newCustomer)

        fetch('https://localhost:7240/LawTrack/api/custumer',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCustomer)
        })
        .then(response => response.json())
        .then((data:Customer) => {
            console.log('Respuesta del servidor:', data)
            if(data.id){
                navigate('/register/customer/support',{ state: { customer : data  } })
            }
            
        })
        .catch(error => {
            console.error('Error al hacer la solicitud:', error);
        })
      }

    return (
        <Form 
            title="Registrar Cliente"
            onHandleSubmit={onHandleSubmit}
        >
            <div className="form-group col-6">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input 
                    name="name"
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    placeholder="Place type in your name."
                    value={name}
                    onChange={onInputChange}
                    required
                />
            </div>
            <div className="form-group col-6">
                <label htmlFor="exampleInputEmail1">Last Name</label>
                <input 
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Place type in Last name."
                    name="lastName"
                    value={lastName}
                    onChange={onInputChange}
                    required
                />
            </div>
            <div className="form-floating col-6">
                <select 
                    className="form-select"
                    id="floatingSelect"
                    aria-label="Floating label select example"
                    value={selectedRole?.id || ''}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un rol</option>
                    {
                        roles?.map( ({id,name}) => (
                                <option key={id} value={id}>
                                        {name}
                                </option>
                            )
                        )
                    }
                </select>
                <label htmlFor="floatingSelect">Tipo</label>
            </div>
            <div className="form-group col-6">
                <label htmlFor="exampleInputEmail1">Cedula</label>
                <input 
                    type="number"
                    name="cedula"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={cedula}
                    onChange={onInputChange}
                    required
                />
            </div>
            <button 
                type="submit"
                className="btn btn-outline-success"
            >
                    Registrar
            </button>
        </Form>
    )
}