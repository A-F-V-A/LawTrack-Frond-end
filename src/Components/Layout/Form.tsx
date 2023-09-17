import '../sass/index.scss'

type props = {
    children: JSX.Element | JSX.Element[];
    title?   : string;
    onHandleSubmit : (event:React.FormEvent<HTMLFormElement>) => void ;
}

export const Form = ({children, title = 'Registro', onHandleSubmit}:props) =>{
    return (
        <form
            onSubmit={onHandleSubmit}
            className="form_container bg-light"
        >
            <div className="row w-100 h-100 p-0 m-0 gx-1 gy-1">
                <h3 className='text-muted text-center col-12 p-0 m-0'>{title}</h3>
               {children}
            </div>
        </form>
    )
}