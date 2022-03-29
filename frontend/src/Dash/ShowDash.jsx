import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const URI = 'http://localhost:5000/dashbs/'

const CompShowDash = () => {
    const [dashbs, setDashbs] = useState([])
    useEffect(() => {
        getDashbs()
    }, [])

    // procedimiento para mostrar todos los dashbs
    const getDashbs = async () => {
        const response = await axios.get(URI)
        setDashbs(response.data)
    }

    // procedimiento para eliminar un dashb
    const deleteDashb = async (id) => {
        await axios.delete(`${URI}${id}`)
        getDashbs()
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h3>Dashboards</h3>
                            <Link to="/crear" className="btn btn-dark" style={{backgroundColor:'6EBF8B'}}>Crear <i className="fa-solid fa-circle-plus"></i></Link>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Content</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dashbs.map(dashb => (
                                        <tr key={dashb.id}>
                                            <td>{dashb.id}</td>
                                            <td>{dashb.title}</td>
                                            <td>{dashb.content}</td>
                                            <td>
                                                <Link to={`/edit/${dashb.id}`} className="btn btn-secondary" style={{backgroundColor: '#6EBF8B'}}>Editar <i className="fa-solid fa-pen-to-square"></i></Link>
                                                <button onClick={() => deleteDashb(dashb.id)} className="btn btn-dark" style={{backgroundColor: '#D82148'}}>Eliminar</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CompShowDash