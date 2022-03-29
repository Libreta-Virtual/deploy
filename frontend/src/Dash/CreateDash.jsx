import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


const URI = 'http://localhost:5000/dashbs/'

const CompCreateDash = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()

    // procedimiento guardar
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, { title: title, content: content })
        navigate('/')
    }

    return (
        <div>
            <h3>Crear nueva lista</h3>
            <form onSubmit={store}>
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
                <button type="submit" className="btn btn-dark" style={{color: '#6EBF8B', backgroundColor: '#151D3B' }}>Guardar</button>
            </form>
        </div>
    )
}

export default CompCreateDash