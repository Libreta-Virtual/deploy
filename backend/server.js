import express from 'express'
import cors from 'cors'
// import db
import db from './database/db.js'
// import enrutador
import dashRoutes from './routes/routes.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/dashbs', dashRoutes)

try {
    await db.authenticate()
    console.log('Conexión exitosa')
} catch (error) {
    console.log(`Error al conectar: ${error}`)
}

/* app.get('/', (req, res) => {
    res.send('Hola desde el backend nodejs')
}) */

app.listen(5000, () => {
    console.log(`Servidor corriendo en http://localhost:5000`)
})
