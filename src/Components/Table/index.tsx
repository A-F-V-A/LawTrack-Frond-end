
type Props = {
    data: any[] | null
}

export const Table = ({ data }:Props) =>{

    if (!data?.length) return <div>No hay datos disponibles</div>
      
    const headers = Object.keys(data[0]).filter(header => header !== 'id')

    return(
        <table className="table table-sm  table-hover table-striped ">
            <thead>
                <tr>
                    {
                        headers.map( td => (<td key={td}>{td}</td>))
                    }
                </tr>
            </thead>
            <tbody>
            {data.map((item) => 
                    (
                        <tr key={item.id}>
                            {headers.map((header) => 
                                    (
                                        <td key={header}>{item[header]}</td>
                                    )
                                )
                            }
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    )
}