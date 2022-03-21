import { Sequelize } from 'sequelize'

const db = new Sequelize('dash_app', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db