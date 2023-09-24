import { Form } from '../index.ts'
import { useForm } from "../../Hooks/useForm.ts";

export const Support = () =>{

    const { formState, onInputChange } = useForm({
        NameArchive:'',
        Description:''
    })

    const { NameArchive, Description } = formState

    const onHandleSubmit = (e: React.FormEvent) =>{
        e.preventDefault()
        const fileInput = document.getElementById('formFile') as HTMLInputElement | null

        // Crear un objeto FormData para enviar el archivo si es necesario
        const formData = new FormData()
        formData.append('NameArchive', NameArchive)
        formData.append('Description', Description)
        formData.append('Archive', fileInput?.files?.[0] || '')

        console.log(formData)
      
    }

    return  (
        <Form
            title="Documentos de "
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
                <a href="#" className="link-secondary">Sin documentos</a>
            </div>
        </Form>
    )
}