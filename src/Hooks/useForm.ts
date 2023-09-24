import { useState, ChangeEvent } from 'react'

interface FormState {
    [key: string]: string;
}

interface FormHook {
    formState: FormState;
    onInputChange: (event: ChangeEvent<HTMLInputElement  | HTMLTextAreaElement >) => void;
    onResetForm: () => void;
    setFormStateSpecific: ({ name, value }:FormState) => void;
}

export const useForm = ( initialForm: FormState = {} ) :FormHook => {
  
    const [ formState, setFormState ] = useState<FormState>( initialForm )

    const onInputChange = ({ target }:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const setFormStateSpecific = ({ name, value }:FormState) =>{
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        setFormStateSpecific
    }
}