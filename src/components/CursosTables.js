import React from "react"

export default props => {
    const rows = props.cursos.map(curso => {
        return (

            <tr className="table-dark" key={curso.id}>
                <td>{curso.id}</td>
                <td>{curso.nome}</td>
                <td>{curso.cargaHoraria}</td>
                <td>{curso.periodos}</td>
                <td>{curso.mensalidade}</td>
                <td>{curso.instituicaoId}</td>
                             
                <td>
                <button type="button" title="Editar" 
                        className="btn btn-dark"
                        onClick={() => props.edite(curso.id)}>
                            <i className="pi pi-trash"></i>
                </button>
                <button type="button" title="Excluir" 
                        className="btn btn-warning"
                        onClick={() => props.delete(curso.id)}>
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
                            <th scope="col">Carga Horária</th>
                            <th scope="col">Periodos</th>
                            <th scope="col">Mensalidade</th>
                            <th scope="col">Instituição ID</th>
                        </tr>
                    </thead>
                    <tbody >
                        {rows}
                    </tbody>
                </table>
    )
}