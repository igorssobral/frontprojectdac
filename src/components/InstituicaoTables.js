import React from "react";


export default props => {
    const rows = props.instituicoes.map(instituicao => {
        return (

            <tr className="table-secondary" key={instituicao.id}>
                <td>{instituicao.id}</td>
                <td>{instituicao.nome}</td>
                <td>{instituicao.email}</td>
                <td>{instituicao.telefone}</td>             
                <td>
                <button type="button" title="Editar" 
                        className="btn btn-info"
                        onClick={() => props.edite(instituicao.id)}>
                            <i className="pi pi-trash"></i>
                </button>
                <button type="button" title="Excluir" 
                        className="btn btn-danger"
                        onClick={() => props.delete(instituicao.id)}>
                           <i className="pi pi-trash"></i>


                </button>      
                </td>
            </tr>
        )
    })

    return(
        <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Telefone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
    )
}