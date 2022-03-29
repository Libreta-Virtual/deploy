import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const URI = 'http://localhost:5000/dashbs/'

const CompEditDash = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const { id } = useParams()

    // procedimiento editar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            title: title, content: content
        })
        navigate('/')
    }

    useEffect(() => {
        getDashById()
    }, [])

    const getDashById = async () => {
        const response = await axios.get(`${URI}${id}`)
        setTitle(response.data.title)
        setContent(response.data.content)
    }

    return (
        <div>
            <h3>Editar lista</h3>
            <form onSubmit={update}>
                <div className="form-group">
                    <div className="mb-3">
                        <label>Título</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Contenido</label>
                        <textarea
                            className="form-control"
                            placeholder="Contenido"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-dark" style={{color: '#6EBF8B', backgroundColor: '#151D3B' }}>Actualizar</button>
            </form>
        </div>
    )

}

export default CompEditDash