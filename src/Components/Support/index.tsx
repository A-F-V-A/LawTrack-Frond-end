import { Form } from '../index.ts'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useForm } from "../../Hooks/useForm.ts";
import { Customer } from '../../Model/Customer';

export const Support = () =>{

    const { formState, onInputChange } = useForm({
        NameArchive:'',
        Description:''
    })

    let Title = ''
    let id : string | null 

    const navigate = useNavigate()

    const location = useLocation()
    
    const { state } = location
  
    // Verificar si hay datos en el estado de la ubicación
    if (state && state.customer) {
      const { customer } = state as { customer: Customer }

      Title = customer.name 
      id = customer.id

      // Aquí puedes trabajar con la información de "customer"
      console.log(customer)
    }

    const { NameArchive, Description } = formState

    const onHandleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        const fileInput = document.getElementById('formFile') as HTMLInputElement | null

        // Crear un objeto FormData para enviar el archivo si es necesario
        const formData = new FormData()
        formData.append('NameArchive', NameArchive)
        formData.append('Description', Description)
        formData.append('Archive', fileInput?.files?.[0] || '')

        console.log(formData,id)

        navigate('/information/customer');
      
    }

    return  (
        <Form
            title={`Registrando Documentos de ${Title}`}
            onHandleSubmit={onHandleSubmit}
        >
            <div className="form-group col-6">
                <label htmlFor="NameArchive">Name File</label>
                <input 
                    name="NameArchive"
                    type="text" 
                    className="form-control" 
                    id="NameArchive" 
                    aria-describedby="emailHelp"
                    placeholder="Place type in your name."
                    value={NameArchive}
                    onChange={onInputChange}
                />
            </div>
            <div className="form-group col-6">
                <label htmlFor="formFile" >File</label>
                <input required className="form-control" type="file" id="formFile" name='Archive'/>
            </div>
            <div className="form-group col-12">
                <label htmlFor="Description">Description</label>
                 <textarea 
                    name="Description"
                    className="form-control" 
                    id="Description"
                    value={Description}
                    required
                    onChange={onInputChange} 
                >
                </textarea>
            </div>
            <button 
                type="submit"
                className="btn btn-outline-success"
            >
                    Register Document
            </button>

            <div className='col-12 align-self-end'>
                <Link className='link-secondary' to={`/information/customer`}>Sin documentos</Link>
            </div>
        </Form>
    )
}