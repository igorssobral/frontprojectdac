import React from "react"

export default props => {
    const rows = props.cursos.map(curso => {
        return (

            <tr class="table-dark" key={curso.id}>
                <td>{curso.id}</td>
                <td>{curso.nome}</td>
                <td>{curso.cargaHoraria}</td>
                <td>{curso.periodos}</td>
                <td>{curso.mensalidade}</td>
                <td>{curso.instituicaoID}</td>
                             
                <td>
                <button type="button" title="Editar" 
                        className="btn btn-dark"
                        onClick={e => props.edit(curso.id)}>
                            <i className="pi pi-trash"></i>
                </button>
                <button type="button" title="Excluir" 
                        className="btn btn-warning"
                        onClick={e => props.delete(curso.id)}>
                           <i className="pi pi-trash"></i>


                </button>      
                </td>
            </tr>
        )
    })

    return(
        <table class="table table-hover">
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